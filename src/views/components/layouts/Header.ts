import { Component } from "../../../types";

export class Header extends Component<"header"> {
  constructor() {
    super("", "header");
  }
  initContent(): void {}
  render(): HTMLElement {
    return this.container;
  }
}
