import { CreateElement } from "./CreateElement";

export function Icon(svg: string, className: string = ""): HTMLDivElement {
  const iconContainer = CreateElement("div", `icon_container ${className}`);
  iconContainer.innerHTML = svg;
  return iconContainer;
}
