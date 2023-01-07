import RAFTClient from "@/raft/raft-client";
import NetworkSimulation from "@/raft/network-simulation";

const EventEmitter = require('events');

class RAFTSimulation extends EventEmitter {
    time = 0;
    tick = 0;
    networkSimulation = null;
    clients = [];
    dataCallbacks = [];

    constructor() {
        super();
        this.networkSimulation = new NetworkSimulation();
        this.clients = [];
    }

    update(dt) {
        this.time += dt;
        this.networkSimulation.update(dt);
        this.clients.forEach(client => client.update(dt));

        this.onDataChanged();
    }

    onDataChanged() {
        this.emit("data", this.data());
    }

    data() {
        let nodes = [];
        this.clients.forEach((client) => {
            let progress = 0;
            if (client.electionTimer && !client.electionTimer.isDue(this.time)) {
                progress = 1 -
                    client.electionTimer.timeLeft(this.time) / client.electionTimer.duration;
            }

            nodes.push({
                name: client.id,
                state: RAFTClient.STATES[client.state],
                progress: progress
            });
        });

        let packets = [];
        this.networkSimulation.packets.forEach((packet) => {
            packets.push({
                id: packet.uuid,
                source: packet.source,
                destination: packet.destination,
                payload: packet.payload,
                progress: 1 - (this.time - packet.receive_tick) / (packet.send_tick - packet.receive_tick)
            });
        });

        let tick = Math.round(this.time);

        return {
            tick,
            nodes,
            packets
        }
    }

    toggleNode(nodeName) {
        let node = this.clients.find((client) => client.id === nodeName);
        if (node) {
            if (node.state === 3) {
                node.startCandidate();
            } else {
                node.startStopped();
            }
        }
    }

    reset(num_clients) {

        delete this.clients;
        delete this.networkSimulation;

        this.time = 0;
        this.networkSimulation = new NetworkSimulation();
        this.clients = [];

        this.emit("reset", this.data());

        for (let i = 0; i < num_clients; i++) {
            const name = "Node_" + i.toString();
            const client = new RAFTClient(name, this.networkSimulation);
            this.clients.push(client);

            client.on("state change", () => {
                //console.log(client.address + " State = " + LifeRaft.states[evt]);
                this.emit("data", this.data());
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
                if (joiner !== target) joiner.join(target.id);
            })
        });

        this.emit("data", this.data());
    }
}

export default new RAFTSimulation();