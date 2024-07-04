import { ScreenLayout } from "../../../types";
import { Text } from "../../components";

export class Login extends ScreenLayout {
  constructor() {
    super("login");

    setTimeout(() => {
      this.initContent();
    }, 0);
  }

  initData() {}

  initContent() {
    const heading = Text("h1", "Login");
    this.container.append(heading);
  }

  render() {
    return this.container;
  }
}
