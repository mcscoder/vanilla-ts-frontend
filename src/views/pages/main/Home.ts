import { logoIcon } from "../../../constants";
import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class Home extends ScreenLayout {
  constructor() {
    super("home");

    setTimeout(() => {
      this.initContent();
    }, 0);
  }

  initData() {}

  initContent() {
    const heading = Text("h1", "Home");

    const button = document.createElement("button");
    button.textContent = "Go to products";
    button.onclick = () => {
      Router.navigateTo("/products", { productId: "12" });
    };
    const logo = Container("center");
    logo.innerHTML = logoIcon;
    this.container.append(heading, button, logo);
  }

  render() {
    return this.container;
  }
}
