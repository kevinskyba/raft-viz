
class NetworkDataPacket {
    uuid = "";

    payload = {};

    source = "";
    destination = "";

    send_tick = 0;
    receive_tick = 0;

    rpc_id = 0;
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export default class NetworkSimulation {
    receive_callbacks = {};

    packets = [];
    time = 0;

    reset() {
        this.packets = [];
        this.receive_callbacks = {};
        this.tick = 0;
    }

    update(dt) {
        let lastTime = Math.round(this.time);
        this.time += dt;

        if (Math.round(this.time) === lastTime) return;

        let toBeRemoved = [];
        this.packets.forEach((packet) => {
            if (packet.receive_tick <= this.time) {
                if (this.receive_callbacks[packet.destination] !== undefined)
                    this.receive_callbacks[packet.destination].forEach(evt => evt(packet.payload, packet.source));
                toBeRemoved.push(packet);
            }
        });
        toBeRemoved.forEach(packet => this.packets.splice(this.packets.indexOf(packet), 1));
    }

    write(source, destination, payload, delay) {
        let packet = new NetworkDataPacket();
        packet.uuid = generateUUID();
        packet.payload = payload;
        packet.source = source;
        packet.destination = destination;
        packet.send_tick = this.time;
        packet.receive_tick = this.time + delay;

        this.packets.push(packet);

        console.debug(`Message from [${source}] to [${destination}]`, payload);

        return packet.rpc_id;
    }

    addReceiveCallback(target, callback) {
        if (this.receive_callbacks[target] === undefined)
            this.receive_callbacks[target] = [];

        this.receive_callbacks[target].push(callback);
    }
}
