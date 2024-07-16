import { Component } from "../../../../types";

type TextFieldType = keyof Pick<HTMLElementTagNameMap, "input" | "textarea">;

export abstract class TextField<T extends TextFieldType> extends Component<T> {
  constructor(
    className: string,
    tagName: T,
    onChange?: (value: string) => void
  ) {
    super(className, tagName);

    if (onChange) {
      (this.container as HTMLElement).addEventListener("change", (e) => {
        const target = e.target as HTMLElementTagNameMap[T];
        setTimeout(() => {
          onChange(target.value);
        }, 0);
      });
    }
  }

  getValue() {
    return this.container.value;
  }
}
