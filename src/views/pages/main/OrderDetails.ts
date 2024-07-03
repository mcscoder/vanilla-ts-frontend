import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class OrderDetails implements ScreenLayout {
  container: HTMLDivElement;
  heading: HTMLHeadingElement;
  constructor() {
    // Global container
    this.container = Container();
    const heading = Text("h1", "OrderDetails");

    const button = document.createElement("button");
    button.textContent = "Click me";

    this.container.append(heading, button);

    console.log(Router.getParams()["orderId"]);
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
