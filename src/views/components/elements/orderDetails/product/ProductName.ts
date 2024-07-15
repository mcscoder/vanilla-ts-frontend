import { CreateElement, Image } from "../../htmls";
import { Link } from "../../links";

export class ProductName extends Link {
  constructor(
    id: number,
    private name: string,
    private imageUrl: string
  ) {
    // Leading class name: "ordered_products-product_name"

    // Container
    super(
      `/product-details/${id}`,
      "ordered_products-product_name-container ordered_products-link"
    );

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Product image
    const image = Image(
      this.imageUrl,
      "ordered_products-product_name-image",
      [40, 40]
    );

    // 2. Product name
    const name = CreateElement("span", "", [this.name]);

    // Add children
    this.container.append(image, name);
  }

  render() {
    return this.container;
  }
}
