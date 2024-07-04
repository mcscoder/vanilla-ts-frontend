import { ScreenLayout } from "../../../types";
import { Container } from "../elements";

export class AuthenticationLayout implements ScreenLayout {
  container: HTMLDivElement;
  constructor() {
    this.container = Container();
  }

  initData() {}

  initContent() {}

  render(...children: HTMLElement[]) {
    this.container.replaceChildren(...children);
    return this.container;
  }
}
