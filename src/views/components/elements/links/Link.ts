import { Router } from "../../../../routes";
import { Component } from "../../../../types";

export class Link extends Component<"a"> {
  constructor(to: string, className: string = "", text = "") {
    super(className, "a");
    this.container.href = to;
    this.container.textContent = text;
    this.container.addEventListener("click", (event) => {
      event.preventDefault();
      Router.navigateTo(to);
    });
  }
  initContent(): void {}
  render() {
    return this.container;
  }
}
