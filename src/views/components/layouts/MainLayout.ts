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
    super("global_container");
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

    // 4. Content container
    const contentContainer = Container(
      "global_container-content_container",
      header.render(),
      this.main.render(),
      footer.render()
    );

    // Add children to container
    this.container.append(navSidebar.render(), contentContainer);
  }

  render(...children: HTMLElement[]) {
    this.main.container.replaceChildren(...children);
    return this.container;
  }
}
