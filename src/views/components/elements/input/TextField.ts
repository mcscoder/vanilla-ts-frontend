import { Component } from "../../../../types";

type TextFieldType = keyof Pick<HTMLElementTagNameMap, "input" | "textarea">;

export abstract class TextField<T extends TextFieldType> extends Component<T> {
  getValue() {
    return this.container.value;
  }
}
