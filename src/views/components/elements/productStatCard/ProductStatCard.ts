import { threeDotsVerticalIcon } from "../../../../constants";
import { Product } from "../../../../models";
import { Component } from "../../../../types";
import { Button } from "../button";
import { Container, CreateElement } from "../htmls";
import { ProductStatItem } from "./ProductStatItem";

export class ProductStatCard extends Component {
  constructor(
    private title: string,
    private products: Product[]
  ) {
    // Leading class name: "product_stat"

    // Container
    super("product_stat-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [title, option button]
    const container1 = Container("product_stat-container-1");
    {
      // 1.1. Title
      const title = CreateElement("h3", "product_stat-title", [this.title]);
      // 1.2. Option button
      const button = new Button({
        startIcon: threeDotsVerticalIcon,
        variant: "icon",
        size: "icon",
        type: "icon",
        onClick: () => {},
      });
      // Add children
      container1.append(title, button.render());
    }

    // 2. Container 2. [product items, report button]
    const container2 = Container("product_stat-container-2");
    {
      // 2.1. Product items
      const products = this.initProductItems();
      // 2.2. Report button
      const button = new Button({
        text: "report",
        onClick: () => {},
      });
      // Add children
      container2.append(products, button.render());
    }

    // Add children
    this.container.append(container1, container2);
  }

  private initProductItems() {
    const container = Container("product_stat-product_container");
    this.products.forEach((product) => {
      const productItem = new ProductStatItem(product);
      container.append(productItem.render());
    });
    return container;
  }

  render() {
    return this.container;
  }
}
