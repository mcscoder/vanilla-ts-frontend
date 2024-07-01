import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class OrderDetails implements ScreenLayout {
  container: HTMLDivElement;
  heading: HTMLHeadingElement;
  constructor() {
    // Global container
    this.container = Container();
    const heading = Text("h1", "OrderDetails");
    this.container.append(heading);
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
