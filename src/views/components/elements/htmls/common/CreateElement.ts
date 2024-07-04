export function CreateElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  className: string = "",
  options?: ElementCreationOptions
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName, options);
  element.className = className;
  return element as HTMLElementTagNameMap[K];
}
