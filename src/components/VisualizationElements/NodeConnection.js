import { Line, Position} from "pencil.js";

export default class NodeConnection extends Line {

    nodeVizA = null;
    nodeVizB = null;

    nodeA = null;
    nodeB = null;

    constructor(nodeVizA, nodeVizB, nodeA, nodeB) {
        super([0, 0], [new Position()]);

        this.nodeVizA = nodeVizA;
        this.nodeVizB = nodeVizB;

        this.nodeA = nodeA;
        this.nodeB = nodeB;

        this.options.stroke = "#DDD";
        this.options.absolute = true;

        this.on("draw", this._onDraw);
    }

    _onDraw() {
        this.position = this.nodeVizA.position;
        this.points = [this.nodeVizB.position];
    }
}