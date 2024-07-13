import { CreateElement } from "../views/components";

export abstract class Component<
  T extends keyof HTMLElementTagNameMap = keyof Pick<
    HTMLElementTagNameMap,
    "div"
  >,
> {
  container: HTMLElementTagNameMap[T];
  constructor(
    className: string,
    tagName: T = "div" as T,
    options?: ElementCreationOptions
  ) {
    this.container = CreateElement(tagName, className, [], options);
  }
  protected abstract initContent(...params: any[]): void;
  abstract render(...params: any[]): HTMLElementTagNameMap[T];
}
