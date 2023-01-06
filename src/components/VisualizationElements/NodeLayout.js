import { Container } from "pencil.js";

export default class NodeLayout extends Container {
    constructor() {
        super();

        this.on("draw", () => {
            const n = this.children.length;
            const distance = n > 0 ? 400 : 0;
            const rotationalOffset = 1.0 / n;
            this.children.forEach((node, idx) => {
                node.position = this.position.clone().add(distance, 0).rotate(rotationalOffset * idx, this.position);
            });
        })
    }
}