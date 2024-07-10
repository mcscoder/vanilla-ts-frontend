import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Container,
  DropDownMenu,
  dropdownTest,
  OrdersTable,
  Pagination,
} from "../../components";
import { orderTableTest } from "./Home";

export class OrderList extends ScreenLayout {
  constructor() {
    // Leading class name: "orders"

    // Container
    super("orders-container");
  }

  initData() {
    this.initContent();
  }

  initContent() {
    this.container.innerText = "";

    // 1. Container 1. [breadcrumb, calendar]
    const container1 = Container("orders-container-1");
    {
      // 1.1. Breadcrumb
      const breadcrumb = new Breadcrumb(["ordersList"]);
      // Add children
      container1.append(breadcrumb.render());
    }

    // 2. Container 2. [change status selection box]
    const container2 = Container("orders-container-2");
    {
      // 2.1. Change status dropdown
      const dropdown = new DropDownMenu(
        dropdownTest,
        0,
        ({ label, value }) => {
          console.log(label, value);
        },
        "Change status"
      );
      // Add children
      container2.append(dropdown.render());
    }

    // 3. Container 3. [orders table, pagination]
    const container3 = Container("orders-container-3");
    {
      // 3.1. Orders table
      const ordersTable = new OrdersTable("Recent Purchases", orderTableTest);
      // 3.2. Pagination
      const pagination = new Pagination(orderTableTest.length, 7, () => {});
      // Add children
      container3.append(ordersTable.render(), pagination.render());
    }

    // Add children
    this.container.append(container1, container2, container3);
  }

  render() {
    return this.container;
  }
}
