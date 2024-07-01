export function Text<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  textContent: string,
  className: string = ""
): HTMLElementTagNameMap[K] {
  const textElement = document.createElement(tagName);
  textElement.textContent = textContent;
  textElement.className = className;

  return textElement;
}
