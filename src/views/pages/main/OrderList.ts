import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Text } from "../../components";

export class OrderList extends ScreenLayout {
  constructor() {
    super("orders");

    setTimeout(() => {
      this.initContent();
    });
  }

  initData() {}

  initContent() {
    const heading = Text("h1", "OrderList");

    const button = document.createElement("button");
    button.textContent = "Go to home";
    button.onclick = () => {
      Router.navigateTo("/");
    };

    this.container.append(heading, button);
  }

  render() {
    return this.container;
  }
}
