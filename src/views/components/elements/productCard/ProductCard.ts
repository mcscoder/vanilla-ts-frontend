import { arrowUpIcon, threeDotsHorizontalIcon } from "../../../../constants";
import { Product } from "../../../../models";
import { Component } from "../../../../types";
import { formatINR } from "../../../../utils";
import { Card } from "../../layouts";
import { Button } from "../button";
import { Container, CreateElement, Icon, Image } from "../htmls";
import { Link } from "../links";

export class ProductCard extends Component {
  constructor(private product: Product) {
    // Leading class name: "product_card"

    // Container
    super("product_card-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [product image, name, category, price, option button]
    const container1 = Container("product_card-container-1");
    {
      // 1.1. Product image
      const image = Image(
        this.product.productImages[0].imageURL,
        "product_card-image",
        [84, 84]
      );
      // 1.2. Container 1_1. [product name, category, price]
      const container1_1 = Container("product_card-container-1-1");
      {
        // 1.2.1. Product name
        const name = new Link(
          `/product-details/${this.product.id}`,
          "product_card-name",
          this.product.name
        );
        // 1.2.2. Category
        const category = CreateElement("p", "product_card-category", [
          this.product.category.name,
        ]);
        // 1.2.3. Price
        const price = CreateElement("p", "product_card-price", [
          formatINR(this.product.regularPrice),
        ]);
        // Add children
        container1_1.append(name.render(), category, price);
      }
      // 1.3. Option button
      const button = new Button({
        startIcon: threeDotsHorizontalIcon,
        variant: "icon",
        size: "icon",
        type: "icon",
        className: "product_card-option_button",
        onClick: () => {},
      });
      // Add children
      container1.append(image, container1_1, button.render());
    }

    // 2. Container 2. [description title, description]
    const container2 = Container("product_card-container-2");
    {
      // 2.1. Title
      const title = CreateElement("p", "product_card-description-title", [
        "Summary",
      ]);
      // 2.2. Description
      const description = CreateElement(
        "p",
        "product_card-description-content",
        [this.product.description]
      );
      // Add children
      container2.append(title, description);
    }

    // 3. Container 3. [sales, remaining products]
    const container3 = Container("product_card-container-3");
    {
      // 3.1. Sales. [title, icon, sales]
      // const condition = true;
      const sales = Container(
        "product_card-status-container",
        CreateElement("p", "product_card-status-title", ["Sales"]), // 1. Title
        Container(
          "product_card-status-container-1",
          Icon(arrowUpIcon, "product_card-status-sales_icon-positive"), // 2. Icon
          CreateElement("p", "product_card-status-content", [
            `${this.product.sales}`,
          ]) // 3. Sales
        )
      );
      // 3.2. Remaining products. [title, status bar, quantity]
      const remaining = Container(
        "product_card-status-container",
        CreateElement("p", "product_card-status-title", ["Remaining Products"]), // 1. Title
        Container(
          "product_card-status-container-1",
          Container(
            "product_card-status-bar-outer",
            (() => {
              // Inner status bar
              // Inner status bar width based on ratio of current-products/max-products
              // Simulation ratio
              const ratio = (100 * this.product.quantity) / 1000;
              const innerBar = Container("product_card-status-bar-inner");
              innerBar.style.width = `${ratio}%`;
              return innerBar;
            })() // Self invoke function
          ), // 2. Status bar
          CreateElement("p", "product_card-status-content", [
            `${this.product.quantity}`,
          ]) // 3. Quantity
        )
      );
      // Add children
      container3.append(sales, Container("product_card-separator"), remaining);

      // Note: This is a super spaghetti code
    }

    // Add children
    this.container.append(container1, container2, container3);
  }

  render() {
    return new Card("", this.container).render();
  }
}
