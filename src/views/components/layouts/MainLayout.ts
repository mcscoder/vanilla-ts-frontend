import { MainLayoutController } from "../../../controllers";
import { CustomEventManager } from "../../../events";
import { ScreenLayout } from "../../../types";
// import { NavSidebar, Header, Footer, Main } from ".";
import { Container } from "../elements";
import { Footer } from "./Footer";
import { Header } from "./header";
import { Main } from "./Main";
import { NavSidebar } from "./NavSidebar";

export class MainLayout extends ScreenLayout<MainLayoutController> {
  main: Main = new Main();
  constructor() {
    // Container
    super("global_container", new MainLayoutController());

    // 1. Initialize events
    this.initEvents();
  }

  initData() {}

  initContent() {
    // 1. Navigation sidebar
    const navSidebar = new NavSidebar(this.controller.categories);

    // 2. Layouts
    const header = new Header();
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

  initEvents() {
    CustomEventManager.addEventListener("logging", () => {
      this.controller.fetchData(this.initContent.bind(this));
    });
  }

  render(...children: HTMLElement[]) {
    this.main.container.replaceChildren(...children);
    return this.container;
  }
}
