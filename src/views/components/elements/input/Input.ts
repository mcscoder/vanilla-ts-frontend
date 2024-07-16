import { TextField } from "./TextField";

// Mapped Types
export type InputOption = {
  [T in keyof HTMLInputElement]?: HTMLInputElement[T];
};

export class Input extends TextField<"input"> {
  constructor(
    options: InputOption,
    className: string = "",
    onChange?: (value: string) => void
  ) {
    // Input
    super(`input ${className}`, "input", onChange);

    for (const key in options) {
      (this.container[key as keyof HTMLInputElement] as unknown) =
        options[key as keyof HTMLInputElement];
    }
  }

  initContent() {}

  render() {
    return this.container;
  }
}
