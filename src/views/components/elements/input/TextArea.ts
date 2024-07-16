import { TextField } from "./TextField";

export type TextAreaOption = {
  [T in keyof HTMLTextAreaElement]?: HTMLTextAreaElement[T];
};

export class TextArea extends TextField<"textarea"> {
  constructor(
    options: TextAreaOption = {},
    className: string = "",
    onChange?: (value: string) => void
  ) {
    // TextArea
    super(`input input-textarea ${className}`, "textarea", onChange);

    for (const key in options) {
      (this.container[key as keyof HTMLTextAreaElement] as unknown) =
        options[key as keyof HTMLTextAreaElement];
    }

    // if rows is not provided, make text area full of container width
    if (!options.rows) {
      this.container.classList.add("h-full");
    }
  }

  initContent() {}

  render() {
    return this.container;
  }
}
