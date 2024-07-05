import { screenPaths } from "../../../../routes";
import { Component } from "../../../../types";
import { Container, CreateElement } from "../htmls";

export class Breadcrumb extends Component {
  private breadcrumb: HTMLDivElement;
  constructor(private paths: (keyof typeof screenPaths)[]) {
    // Leading class name: "breadcrumb"

    super("breadcrumb-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Title
    const title = CreateElement("h2", "breadcrumb-title");
    title.textContent = screenPaths[this.paths[this.paths.length - 1]].name;

    // 2. Paths
    this.breadcrumb = Container("breadcrumb-path_container");
    this.initBreadcrumb();

    // Add children
    this.container.append(title, this.breadcrumb);
  }

  initBreadcrumb() {
    this.breadcrumb.innerText = "";
    this.breadcrumb.textContent = "Home";

    this.paths.forEach((path) => {
      const name = CreateElement("span", "breadcrumb-name");
      name.textContent = screenPaths[path].name;
      this.breadcrumb.append(Container("", ">"), name);
    });
  }

  render() {
    return this.container;
  }
}
