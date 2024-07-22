import { Component } from "../../../../types";
import { CreateElement } from "../htmls";

export class Checkbox extends Component {
  constructor(
    private id: string,
    className: string,
    private labelChildren: (Node | string)[]
  ) {
    // Container
    super(className);

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Checkbox
    const checkbox = CreateElement("input");
    checkbox.type = "checkbox";
    checkbox.id = this.id;

    // 2. Label
    const label = CreateElement("label");
    label.htmlFor = this.id;
    label.append(...this.labelChildren);

    // Add children
    this.container.append(checkbox, label);
  }

  render() {
    return this.container;
  }
}
