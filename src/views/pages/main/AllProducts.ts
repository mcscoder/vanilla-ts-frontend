import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class AllProducts implements ScreenLayout {
  container: HTMLDivElement;
  heading: HTMLHeadingElement;
  constructor() {
    // Global container
    this.container = Container();
    const heading = Text("h1", "AllProducts");

    const button = document.createElement("button");
    button.textContent = "Go to orders";
    button.onclick = () => {
      Router.navigateTo("/orders");
    };

    this.log();

    this.container.append(heading, button);
  }

  log() {
    console.log("From Products");
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
