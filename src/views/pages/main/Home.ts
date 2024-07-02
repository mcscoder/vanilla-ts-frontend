import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class Home implements ScreenLayout {
  container: HTMLDivElement;

  constructor() {
    // Global container
    this.container = Container();

    const heading = Text("h1", "Home");

    const button = document.createElement("button");
    button.textContent = "Go to products";
    button.onclick = () => {
      Router.navigateTo("/products", { productId: "12" });
    };
    this.log();
    this.container.append(heading, button);
  }

  log() {
    console.log("From Home");
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
