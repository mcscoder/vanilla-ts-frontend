import { Component } from "../../../types";

export class Main extends Component<"main"> {
  constructor() {
    // Main
    super("main", "main");
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
