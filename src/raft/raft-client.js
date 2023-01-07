
class Timer {
    start = 0;
    duration = 0;
    meta = {};

    constructor(start, duration) {
        this.start = start;
        this.duration = duration;
    }

    reset(start) {
        this.start = start;
    }

    timeLeft(now) {
        return this.start + this.duration - now;
    }

    isDue(now) {
        return this.timeLeft(now) <= 0;
    }
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}

const EventEmitter = require('events');
export default class RAFTClient extends EventEmitter {
    static STATES = ["LEADER", "CANDIDATE", "FOLLOWER", "STOPPED"];

    time = 0;

    networkSimulation = null;
    id = "";
    peers = []

    currentTerm = 0;

    // Voting
    votedFor = null;
    votesReceived = 0;
    electionTimer = null;

    // Ping
    voteTimer = null;

    state = 1;

    constructor(id, networkSimulation) {
        super();
        this.networkSimulation = networkSimulation;
        this.id = id;
        this.networkSimulation.addReceiveCallback(this.id, this._onReceive.bind(this));

        this._startCandidate();
    }

    _onReceive(packet, source) {

        // We don't do anything if we are stopped
        if (this.state === 3) {
            return;
        }

        // If we receive a packet, we have to check whether we are still on the same term
        if (packet.term > this.currentTerm) {
            // If not, we know that the cluster is ahead of us, so we go following
            this._startFollow(packet.term);
        }

        // We ignore any packet "from the past"
        if (packet.term < this.currentTerm) {
            return;
        }

        // If some claims to be the leader, we believe it
        if (packet.leader) {
            this._startFollow(packet.term);
        }

        switch (packet.type) {
            case "requestVote":
                if (this.votedFor === null) {
                    this.votedFor = packet.candidate;

                    this.send({
                        type: "replyVote",
                        leader: this.state === 0,
                        term: packet.term,
                        granted: true
                    }, source);

                    if (this.electionTimer) this.electionTimer.reset(this.time);
                } else {
                    this.send({
                        type: "replyVote",
                        leader: this.state === 0,
                        term: packet.term,
                        granted: false
                    }, source);
                }
                break;
            case "replyVote":
                // Check if we are still candidate
                if (this.state !== 1) return;
                if (!packet.granted) return;

                this.votesReceived++;

                if (this.votesReceived > Math.round(this.peers.length / 2)) {
                    this._startLeader();
                }
                break;
            case "append":
                if (this.state !== 2) this._startFollow(packet.term);
                if (this.pingTimer) this.pingTimer.reset(this.time);
        }
    }

    startStopped() {
        this.setState(3); // Stopped
        this.electionTimer = null;
        this.pingTimer = null;
        this.votedFor = null;
        this.currentTerm = 0;
    }

    startCandidate() {
        this._startCandidate();
    }

    _startFollow(term) {
        this.setState(2); // Follower
        this.electionTimer = null;
        this.pingTimer = null;
        this.currentTerm = term;
        this.votedFor = null;
    }

    _startCandidate() {
        this.votedFor = null;
        this.pingTimer = null;
        this.setState(1); // Candidate
    }

    _startLeader() {
        this.votedFor = null;
        this.pingTimer = null;
        this.electionTimer = null;
        this.setState(0); // Leader
    }

    update(dt) {
        let lastTime = Math.round(this.time);
        this.time += dt;

        if (Math.round(this.time) === lastTime) return;

        switch (this.state) {
            case 1:
                this._updateCandidate();
                break;
            case 2:
                this._updateFollower();
                break;
            case 0:
                this._updateLeader();
        }
    }

    setState(state) {
        this.state = state;
        this.emit("state change", state);
    }

    _updateCandidate() {
        if (this.electionTimer == null) {
            this.electionTimer = new Timer(this.time, getRandomInt(100, 150));
            this.electionTimer.meta.currentTerm = this.currentTerm;
        }

        // If we are a candidate, we need to wait for our own timer to finish
        // and then start a vote.
        if (this.electionTimer.isDue(this.time)) {
            this.electionTimer = null;

            this.currentTerm = this.currentTerm + 1;
            this.votedFor = this.id;
            this.votesReceived = 1;

            this.send({
                type: "requestVote",
                leader: this.state === 0,
                term: this.currentTerm,
                candidate: this.id
            });
        }
    }

    _updateFollower() {
        // As a follower, we want to check whether we have to start an election
        if (this.electionTimer == null) {
            this.electionTimer = new Timer(this.time, getRandomInt(100, 150));
            this.electionTimer.meta.currentTerm = this.currentTerm;
        }

        if (this.electionTimer.isDue(this.time)) {
            this._startCandidate();
        }
    }

    _updateLeader() {
        if (this.pingTimer == null) {
            this.pingTimer = new Timer(this.time, 50);
        }

        if (this.pingTimer.isDue(this.time)) {
            this.pingTimer = null;
            this._sendAppend();
        }
    }

    _sendAppend() {
        this.send({
            type: "append",
            leader: this.state === 0,
            term: this.currentTerm
        });
    }

    join(id) {
        this.peers.push(id);
    }

    send(msg, destination = null) {
        if (destination == null)
            for (let peer in this.peers) {
                this.networkSimulation.write(this.id, this.peers[peer], msg, getRandomInt(10, 20));
            }
        else
            this.networkSimulation.write(this.id, destination, msg, getRandomInt(10, 20));
    }
}