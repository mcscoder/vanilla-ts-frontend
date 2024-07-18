import { Component } from "../../../../../types";

export class Form extends Component<"form"> {
  constructor(className: string) {
    super(className, "form");

    // Prevent default
    this.container.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  onSubmit(action: () => void) {
    this.container.addEventListener("submit", () => {
      action();
    });
  }

  initContent() {}

  render() {
    return this.container;
  }
}
