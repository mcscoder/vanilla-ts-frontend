import { ScreenLayout } from "../../../types";
import { Breadcrumb } from "../../components";

export class Home extends ScreenLayout {
  constructor() {
    super("home");

    this.initContent();
  }

  initData() {}

  initContent() {
    // 1. Breadcrumb
    const breadcrumb = new Breadcrumb(["home"]);

    this.container.append(breadcrumb.render());
  }

  render() {
    return this.container;
  }
}
