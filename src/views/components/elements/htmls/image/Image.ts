import { CreateElement } from "../common";

export function Image(
  src: string,
  className: string = "",
  size?: [width: number, height: number]
) {
  const img = CreateElement("img", className);
  img.src = src;
  if (size) {
    img.width = size[0];
    img.height = size[1];
  }
  return img;
}
