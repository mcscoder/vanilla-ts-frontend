import { Component } from "../../../../types";
import { CreateElement } from "../htmls";

export class Checkbox extends Component {
  private checkbox = CreateElement("input");
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
    this.checkbox.type = "checkbox";
    this.checkbox.id = this.id;

    // 2. Label
    const label = CreateElement("label");
    label.htmlFor = this.id;
    label.append(...this.labelChildren);

    // Add children
    this.container.append(this.checkbox, label);
  }

  isChecked() {
    return this.checkbox.checked;
  }

  render() {
    return this.container;
  }
}
