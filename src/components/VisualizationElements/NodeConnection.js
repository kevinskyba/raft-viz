import { Line, Position} from "pencil.js";

export default class NodeConnection extends Line {

    nodeA = null;
    nodeB = null;

    constructor(nodeA, nodeB) {
        super([0, 0], [new Position()]);

        this.nodeA = nodeA;
        this.nodeB = nodeB;

        this.options.stroke = "#DDD";
        this.options.absolute = true;

        this.on("draw", this._onDraw);
    }

    _onDraw() {
        this.position = this.nodeA.position;
        this.points = [this.nodeB.position];
    }
}