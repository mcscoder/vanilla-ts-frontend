import { Component } from "../../../types";

export class Card extends Component {
  constructor(className: string, ...children: Node[] | string[]) {
    super(`card ${className}`);
    this.container.append(...children);
  }

  initContent() {}

  render() {
    return this.container;
  }
}
