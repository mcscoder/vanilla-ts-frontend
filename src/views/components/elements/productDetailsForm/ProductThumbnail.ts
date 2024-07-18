import { Component } from "../../../../types";
import { Container, Image } from "../htmls";

export class ProductThumbnail extends Component {
  constructor(
    private imageUrl: string = "",
    className: string = ""
  ) {
    // Leading class name: "product_details_form-thumbnail"

    // Container
    super(`product_details_form-thumbnail-container ${className}`);

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    this.container.append(
      Container(
        "product_details_form-thumbnail-image-container",
        Image(this.imageUrl, "product_details_form-thumbnail-image")
      )
    );
  }

  render() {
    return this.container;
  }
}
