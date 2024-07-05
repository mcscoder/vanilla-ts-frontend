export function CreateElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  className: string = "",
  children: Node[] | string[] = [],
  options?: ElementCreationOptions
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName, options);
  element.className = className;
  element.append(...children);
  return element as HTMLElementTagNameMap[K];
}
