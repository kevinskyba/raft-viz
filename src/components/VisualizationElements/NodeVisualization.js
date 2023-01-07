import Pencil, {Circle, Container, Pie, Text} from "pencil.js";
import TWEEN from "tween.js";

export default class NodeVisualization extends Container {

    timelinePercentage = 1.0;
    nodeName = "Node";
    stateName = "";

    STATE_COLORS = {
        "LEADER": "#e7cf22",
        "STOPPED": "#757575",
        "DEFAULT": "#DDD"
    }

    constructor() {
        super();

        this.circle = new Circle([0, 0], 100);
        this.circle.options.fill = "#DDD";

        this.timelinePie = new Pie([0, 0], 110);
        this.timelinePie.startAngle = 0;
        this.timelinePie.options.fill = "#fff";

        this.nameText = new Text([0, 0], this.nodeName);
        this.nameText.options.fill = "#000";
        this.nameText.options.fontSize = 40;
        this.nameText.options.align = Pencil.Text.alignments.center;
        this.nameText.options.lineHeight = 1;

        this.stateText = new Text([0, 0], this.nodeName);
        this.stateText.options.fill = "#000";
        this.stateText.options.fontSize = 12;
        this.stateText.options.bold = true;
        this.stateText.options.align = Pencil.Text.alignments.center;
        this.stateText.options.lineHeight = 1;

        this.add(this.timelinePie);
        this.add(this.circle);
        this.add(this.nameText)
        this.add(this.stateText);

        this.on("draw", this._onDraw);

        this.timelinePercentage = 0.9;
    }

    pulse() {
        const size = {height: this.timelinePie.height, width: this.timelinePie.width};
        new TWEEN
            .Tween(size)
            .to({height: 120, width: 120}, 1000)
            .yoyo(true)
            .repeat(1)
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .onUpdate(() => {
                //console.log(obj);
                this.timelinePie.height = size.height;
                this.timelinePie.width = size.width;
            })
            .start();
    }

    _onDraw() {
        this.timelinePie.endAngle = this.timelinePercentage;

        this.nameText.text = this.nodeName;
        this.nameText.options.origin.set(-this.nameText.getAlignOffset() * this.nameText.width, -this.nameText.height/2);

        this.stateText.text = this.stateName;
        this.stateText.options.origin.set(-this.stateText.getAlignOffset() * this.stateText.width, -this.stateText.height/2);
        this.stateText.position.set(0, this.nameText.height);

        if (this.STATE_COLORS[this.stateName]) {
            this.circle.options.fill = this.STATE_COLORS[this.stateName];
        } else {
            this.circle.options.fill = this.STATE_COLORS["DEFAULT"];
        }
    }
}