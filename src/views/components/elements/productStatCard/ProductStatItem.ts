import { Product } from "../../../../models";
import { Component } from "../../../../types";
import { formatINR } from "../../../../utils";
import { Container, CreateElement } from "../htmls";

export class ProductStatItem extends Component {
  constructor(private product: Product) {
    // Leading class name: "product_stat_item"

    // Container
    super("product_stat_item-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Product image
    const image = CreateElement("img", "product_stat_item-image");
    image.width = 64;
    image.height = 64;
    image.src = this.product.productImages[0].imageURL;

    // 2. Container 1. [title, price 1]
    const container1 = Container("product_stat_item-container-1");
    {
      // 2.1. Title
      const title = CreateElement("h4", "product_stat_item-title", [
        this.product.name,
      ]);
      // 2.2. Price 1
      const price = CreateElement("p", "product_stat_item-price-1", [
        formatINR(this.product.regularPrice),
      ]);
      // Add children
      container1.append(title, price);
    }

    // 3. Container 2. [price 2, product sales]
    const container2 = Container("product_stat_item-container-2");
    {
      // 3.1. Price 2
      const price = CreateElement("p", "product_stat_item-price-2", [
        formatINR(this.product.regularPrice),
      ]);
      // 3.2. Product sales
      const sales = CreateElement("p", "product_stat_item-sales", [
        `${this.product.sales} sales`,
      ]);
      // Add children
      container2.append(price, sales);
    }

    this.container.append(image, container1, container2);
  }

  render() {
    return this.container;
  }
}
