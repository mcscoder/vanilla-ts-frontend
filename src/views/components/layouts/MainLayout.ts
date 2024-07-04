import { ScreenLayout } from "../../../types";
// import { NavSidebar, Header, Footer, Main } from ".";
import { Container } from "../elements";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { NavSidebar } from "./NavSidebar";

export class MainLayout extends ScreenLayout {
  main: Main;
  constructor() {
    // Container
    super("global-container");
    this.initContent();
  }

  initData() {}

  initContent(): void {
    // 1. Navigation sidebar
    const navSidebar = new NavSidebar();

    // 2. Layouts
    const header = new Header();
    this.main = new Main();
    const footer = new Footer();

    // 3. Content container
    const mainContainer = Container(
      "content-container",
      this.main.render(),
      footer.render()
    );

    // Add children to container
    this.container.append(navSidebar.render(), header.render(), mainContainer);
  }

  render(...children: HTMLElement[]) {
    this.main.container.replaceChildren(...children);
    return this.container;
  }
}
