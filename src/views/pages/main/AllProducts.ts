import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Text } from "../../components";

export class AllProducts extends ScreenLayout {
  constructor() {
    super("products");

    setTimeout(() => {
      this.initContent();
    }, 0);
  }

  initData() {}

  initContent() {
    const heading = Text("h1", "AllProducts");

    const button = document.createElement("button");
    button.textContent = "Go to orders";
    button.onclick = () => {
      Router.navigateTo("/orders");
    };

    this.container.append(heading, button);
  }

  render() {
    return this.container;
  }
}
