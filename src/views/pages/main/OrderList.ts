import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class OrderList implements ScreenLayout {
  container: HTMLDivElement;
  constructor() {
    // Global container
    this.container = Container();
    const heading = Text("h1", "OrderList");

    const button = document.createElement("button");
    button.textContent = "Go to home";
    button.onclick = () => {
      Router.navigateTo("/");
    };

    this.log();

    this.container.append(heading, button);
  }

  log() {
    console.log("From Orders");
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
