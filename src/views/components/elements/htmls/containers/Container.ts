export function Container(
  className: string = "",
  ...children: Node[] | string[]
): HTMLDivElement {
  const container = document.createElement("div");
  container.className = className;
  container.append(...children);
  return container;
}
