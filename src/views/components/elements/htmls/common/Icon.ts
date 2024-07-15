import { CreateElement } from "./CreateElement";

export function Icon(
  svg: string,
  className: string = "",
  size?: [width: number, height: number]
): HTMLDivElement {
  const iconContainer = CreateElement("div", `icon_container ${className}`);
  iconContainer.innerHTML = svg;

  if (size) {
    iconContainer.firstElementChild?.setAttribute("height", `${size[0]}px`);
    iconContainer.firstElementChild?.setAttribute("width", `${size[1]}px`);
  }
  return iconContainer;
}
