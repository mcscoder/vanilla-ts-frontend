import { deliveryStatus } from "../../../../constants";
import { Order } from "../../../../models";
import { Component } from "../../../../types";
import { formatDate, formatINR } from "../../../../utils";
import { Card } from "../../layouts";
import { Container, CreateElement } from "../htmls";
import { Link } from "../links";
import { ListTable } from "../table";

export const headerTextItems = [
  "Order ID", // #1234
  "Date", // Nov 8th,2023
  "Customer Name", // Giga Chad
  "Status", // 0: Delivered | 1: Canceled | 2: Transport
  "Amount", // ₹200.00 - Indian currency (Rupee)
];

export class OrdersTable extends Component {
  constructor(
    private title: string,
    private orders: Order[]
  ) {
    // Leading class name: "order_table"

    // Container
    super("order_table-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    const bodyItems: (string | HTMLElement)[][] = [];

    this.orders.forEach((order) => {
      // 1. order id link
      const orderIdLink = new Link(
        `/order-details/${order.id}`,
        "order_table-link",
        `#${order.id}`
      );

      // 2. date
      // date. temp code for designing UI
      // will be refactor later because date now is not string anymore
      // date will be a number or any date format depends on database format
      // that should be convert to expected format later
      const dateText = formatDate(order.createdAt);

      // 3. customer name element
      const customerNameElement = this.CustomerName(
        order.userPaymentMethod.user.avatar,
        `${order.userPaymentMethod.user.firstName} ${order.userPaymentMethod.user.lastName}`
      );

      // 4. delivery status element
      const deliveryStatusElement = this.DeliveryStatus(order.orderStatusId);

      // 5. amount
      const amountText = formatINR(
        order.orderProducts.reduce((total, orderProduct) => {
          return (total += orderProduct.price * orderProduct.quantity);
        }, 0)
      );

      bodyItems.push([
        orderIdLink.render(),
        dateText,
        customerNameElement.render(),
        deliveryStatusElement,
        amountText,
      ]);
    });

    // Table
    const table = new ListTable(this.title, headerTextItems, bodyItems);

    // Add children
    this.container = table.render();
  }

  private CustomerName(imageUrl: string, name: string) {
    // Leading class name: "order_table-customer_name"

    // Container. [avatar, name]
    const link = new Link("#", "order_table-customer_name order_table-link");
    {
      // 1. Avatar
      const avatar = CreateElement("img", "order_table-customer_name-avatar");
      avatar.src = imageUrl;
      avatar.width = 32;
      avatar.height = 32;
      // 2. Name
      const customerName = CreateElement("span", "", [name]);
      // Add children
      link.container.append(avatar, customerName);
    }
    return link;
  }

  private DeliveryStatus(statusIndex: number) {
    // Leading class name: "order_table-delivery_status"

    // Container. [a dot, status text]
    const container = Container("order_table-delivery_status-container");
    {
      // 1. Dot
      const dot = Container(
        `order_table-delivery_status-dot order_table-delivery_status-dot-${statusIndex}`
      );
      // 2. Status
      const status = CreateElement("p", "", [deliveryStatus[statusIndex]]);
      // Add children
      container.append(dot, status);
    }
    return container;
  }

  render() {
    return new Card("", this.container).render();
  }
}
