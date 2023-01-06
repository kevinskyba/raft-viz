import {Container, Position} from "pencil.js";

export default class CenterLayout extends Container {

    constructor() {
        super();

        this.on("draw", () => {
            this.position = new Position(
                this.parent.position.x + this.parent.width / 2,
                this.parent.position.y + this.parent.height / 2);
        })
    }
}