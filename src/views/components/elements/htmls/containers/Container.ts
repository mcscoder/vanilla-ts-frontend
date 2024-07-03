export function Container(
  className: string = "",
  ...children: Node[]
): HTMLDivElement {
  const container = document.createElement("div");
  container.className = className;
  container.append(...children);
  return container;
}
