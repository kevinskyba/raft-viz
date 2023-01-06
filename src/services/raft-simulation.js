const LifeRaft = require("@markwylde/liferaft");

class NetworkDataPacket {
    payload = {};

    source = "";
    destination = "";

    send_tick = 0;
    receive_tick = 0;

    rpc_id = 0;
}

class NetworkSimulation {
    receive_callbacks = {};

    packets = [];
    tick = 0;

    _rpc_id = 0;

    reset() {
        this.packets = [];
        this.receive_callbacks = {};
        this.tick = 0;
    }

    update(delta_ticks) {
        this.tick += delta_ticks;

        let toBeRemoved = [];
        this.packets.forEach((packet) => {
            if (packet.receive_tick <= this.tick) {
                if (this.receive_callbacks[packet.destination] !== undefined)
                    this.receive_callbacks[packet.destination].forEach(evt => evt(packet.payload, packet.source));
                toBeRemoved.push(packet);
            }
        });
        toBeRemoved.forEach(packet => this.packets.splice(this.packets.indexOf(packet), 1));
    }

    write(source, destination, payload, delay) {
        let packet = new NetworkDataPacket();
        packet.payload = payload;
        packet.source = source;
        packet.destination = destination;
        packet.send_tick = this.tick;
        packet.receive_tick = this.tick + delay;
        packet.rpc_id = this._rpc_id++;

        this.packets.push(packet);

        return packet.rpc_id;
    }

    addReceiveCallback(target, callback) {
        if (this.receive_callbacks[target] === undefined)
            this.receive_callbacks[target] = [];

        this.receive_callbacks[target].push(callback);
    }
}

const NetworkSimulationSingleton = new NetworkSimulation();

class LifeRaftExt extends LifeRaft {
    initialize() {
        NetworkSimulationSingleton.addReceiveCallback(this.address, (data, source) => {
            this.emit("data", data, function reply(data) {
                Promise.resolve(data).then((val) => {
                    if (val !== undefined)
                        NetworkSimulationSingleton.write(this.address, source, val, 150);
                });
            }.bind(this));
        });
    }

    write(packet) {
        // NOTE: write() is a bit missleading. Internally, LifeRaft seems to be using
        // clones of itself. The address to send the data to is this.address, which is
        // because when cloning, this.address seems to be overwritten.
        NetworkSimulationSingleton.write(packet.address, this.address, packet, 15);
    }
}

class RAFTSimulation {
    clients = [];
    dataCallbacks = [];

    constructor() {
        this.clients = [];
    }

    update() {
        //NetworkSimulationSingleton.update(1);
        //this.clients.forEach(client => client.update(1));
    }

    data() {
        let nodes = [];
        this.clients.forEach((client) => {
            nodes.push({
                name: client.address,
                state: LifeRaft.states[client.state]
            });
        });

        return {
            nodes
        }
    }

    addDataCallback(cb) {
        this.dataCallbacks.push(cb);
    }

    removeDataCallback(cb) {
        this.dataCallbacks.splice(this.dataCallbacks.indexOf(cb), 1);
    }

    onDataChanged() {
        this.dataCallbacks.forEach(cb => cb(this.data()));
    }

    reset(num_clients) {
        NetworkSimulationSingleton.reset();
        for (let i = 0; i < num_clients; i++) {
            const name = "Node_" + i.toString();
            const client = new LifeRaftExt(name, {

            });
            this.clients.push(client);

            client.on("state change", (evt) => {
                console.log(client.address + " State = " + LifeRaft.states[evt]);
                this.onDataChanged();
            });
            client.on("error", (evt) => {
                console.log(client.address + " Error = " + evt);
            });
            client.on("vote", (evt) => {
                console.log(client.address + " Vote = " + evt.address);
            });
        }

        // Let anybody join anybody
        this.clients.forEach(joiner => {
            this.clients.forEach(target => {
                if (joiner !== target) joiner.join(target.address);
            })
        });

        this.clients.forEach(client => client.update(1));
    }
}

export default new RAFTSimulation();