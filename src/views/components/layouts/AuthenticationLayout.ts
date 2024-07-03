import { ScreenLayout } from "../../../types";
import { Container } from "../elements";

export class AuthenticationLayout implements ScreenLayout {
  container: HTMLDivElement;
  constructor() {
    this.container = Container();
  }
  initContent(): void {}
  render(...children: HTMLElement[]) {
    this.container.replaceChildren(...children);
    return this.container;
  }
}
