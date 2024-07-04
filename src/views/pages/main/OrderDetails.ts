import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Text } from "../../components";

export class OrderDetails extends ScreenLayout {
  constructor() {
    super("order_details");

    setTimeout(() => {
      this.initContent();
    }, 0);
  }

  initData() {}

  initContent() {
    const heading = Text("h1", "OrderDetails");

    const button = document.createElement("button");
    button.textContent = "Click me";

    this.container.append(heading, button);

    console.log(Router.getParams()["orderId"]);
  }

  render() {
    return this.container;
  }
}
