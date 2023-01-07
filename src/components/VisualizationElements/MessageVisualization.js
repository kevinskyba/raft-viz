import Pencil, {Container, Position, Rectangle, Text} from "pencil.js";

export default class MessageVisualization extends Container {

    uuid = "";
    messageName = "Msg";
    progress = 0;

    target_pos = new Position();

    positionTween = null;

    constructor(uuid, from, to) {
        super();

        this.uuid = uuid;
        this.from = from;
        this.to = to;

        this.box = new Rectangle([0, 0], 120, 60);
        this.box.options.fill = "#c5bf9f";

        this.nameText = new Text([0, 0], this.messageName);
        this.nameText.options.fill = "#000";
        this.nameText.options.fontSize = 18;
        this.nameText.options.align = Pencil.Text.alignments.center;
        this.nameText.options.lineHeight = 1;

        this.add(this.box);
        this.add(this.nameText)


        this.on("draw", this._onDraw);
    }

    _onDraw() {
        this.nameText.text = this.messageName;
        this.nameText.options.origin.set(
            -this.nameText.getAlignOffset() * this.nameText.width + this.box.width / 2,
            -this.nameText.height/2 + this.box.height / 2);

        this.position = this.from.position.clone()
            .add(
                (this.to.position.clone().subtract(this.from.position)).multiply(this.progress))
            .subtract(new Position(this.box.width/2, this.box.height/2));
    }
}