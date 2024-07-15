import { Order } from "../../../../../models";
import { Component } from "../../../../../types";
import { formatINR } from "../../../../../utils";
import { Card } from "../../../layouts";
import { Container } from "../../htmls";
import { Link } from "../../links";
import { ListTable } from "../../table";
import { OrderSummary } from "./OrderSummary";
import { ProductName } from "./ProductName";

export class OrderedProductsSection extends Component {
  constructor(private order: Order) {
    // Leading class name: "ordered_products"

    // Container
    super("ordered_products-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    const tableItem: (string | HTMLElement)[][] = [];
    let orderTotalPrice = 0;

    // 1. Initialize table item
    this.order.orderProducts.forEach((orderProduct) => {
      // 1.1. Product name
      const productName = new ProductName(
        orderProduct.product.id,
        orderProduct.product.name,
        orderProduct.product.productImages[0].imageURL
      );

      // 2. Order id
      const orderId = new Link("#", "", `#${orderProduct.orderId}`);

      // 3. Quantity
      const productQuantity = orderProduct.quantity;

      // 4. Total price
      const totalPrice = orderProduct.quantity * orderProduct.price;
      orderTotalPrice += totalPrice;

      tableItem.push([
        productName.render(),
        orderId.render(),
        `${productQuantity}`,
        formatINR(totalPrice),
      ]);
    });

    // 2. Ordered products table
    const table = new ListTable(
      "Products",
      ["Product Name", "Order ID", "Quantity", "Total"],
      tableItem
    );
    {
      // 2.1. Add class name for header
      table.tableHeader.addColumnClassName(0, "ordered_products-product_name");
      table.tableHeader.addColumnClassName(3, "ordered_products-total_price");
      // 2.2. Add class name for body
      table.tableBody.addColumnClassName(0, "ordered_products-product_name");
      table.tableBody.addColumnClassName(1, "ordered_products-link");
      table.tableBody.addColumnClassName(3, "ordered_products-total_price");
    }

    // 3. Container 1. [order summary]
    const container1 = Container("ordered_products-container-1");
    {
      // 3.1. Order summary
      const summary = new OrderSummary(orderTotalPrice);
      // Add children
      container1.append(summary.render());
    }

    // Add children
    this.container.append(table.render(), container1);
  }

  render() {
    return new Card("", this.container).render();
  }
}
