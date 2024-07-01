import { ScreenLayout } from "../../../types";
import { Container, Text } from "../../components";

export class Home implements ScreenLayout {
  container: HTMLDivElement;

  constructor() {
    // Global container
    this.container = Container();
    const heading = Text("h1", "Home");
    this.container.append(heading);
  }

  initContent(): void {}

  render() {
    return this.container;
  }
}
