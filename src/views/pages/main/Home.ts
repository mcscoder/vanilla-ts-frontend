import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import { Button, Text } from "../../components";

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

    // const button = document.createElement("button");
    // button.textContent = "Go to products";
    // button.onclick = () => {
    //   Router.navigateTo("/products", { productId: "12" });
    // };
    // const logo = Container("center");
    // logo.innerHTML = logoIcon;
    const button = new Button({
      text: "Go to products",
      variant: "primary",
      size: "md",
      type: "filled",
      className: "",
      onClick: () => {
        Router.navigateTo("/products", { productId: "12" });
      },
    });

    this.container.append(heading, button.render());
  }

  render() {
    return this.container;
  }
}
