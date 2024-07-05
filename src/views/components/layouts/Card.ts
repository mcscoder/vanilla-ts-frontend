import { Component } from "../../../types";

export class Card extends Component {
  constructor(...children: Node[] | string[]) {
    super("card");
    this.container.append(...children);
  }

  initContent() {}

  render() {
    return this.container;
  }
}
