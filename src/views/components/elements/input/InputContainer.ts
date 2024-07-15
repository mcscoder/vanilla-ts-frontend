import { Component } from "../../../../types";
import { DropDownMenu } from "../dropDownMenu";
import { CreateElement } from "../htmls";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

type InputType = Input | TextArea | DropDownMenu;

export class InputContainer<T extends InputType> extends Component {
  constructor(
    private label: string,
    public input: T,
    className: string = ""
  ) {
    // Leading class name: "input-container"

    // Container
    super(`input-container ${className}`);

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    const id = this.label.replace(" ", "");

    // 1. Label
    const label = CreateElement("label", "input-container-label", [this.label]);
    label.htmlFor = id;

    // 2. Input
    const input = this.input.render();
    input.id = id;
    input.classList.add("input-container-input_field");

    // Add children
    this.container.append(label, input);
  }

  render() {
    return this.container;
  }
}
