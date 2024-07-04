import { Component } from "../../../types";

export class Footer extends Component<"footer"> {
  constructor() {
    super("", "footer");
  }
  initContent(): void {}
  render() {
    return this.container;
  }
}
