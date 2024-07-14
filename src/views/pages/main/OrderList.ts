import { OrdersListController } from "../../../controllers";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Container,
  DropDownMenu,
  MenuItem,
  OrdersTable,
  Pagination,
} from "../../components";
// import { orderTableTest } from "./Home";

export class OrderList extends ScreenLayout<OrdersListController> {
  container3: HTMLDivElement = Container("orders-container-3");
  constructor() {
    // Leading class name: "orders"

    // Container
    super("orders-container", new OrdersListController());
  }

  initData() {
    super.initData();
    this.controller.fetchData(this.initContent.bind(this));
    // this.initContent();
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
        this.controller.orderStatuses.map(({ id, name }): MenuItem => {
          return { value: id, label: name };
        }),
        0,
        async ({ value }) => {
          const orderStatusId = value !== -1 ? value : undefined;
          await this.controller.fetchOrders(orderStatusId);
          this.initOrdersTable();
        },
        "Change status"
      );
      // Add children
      container2.append(dropdown.render());
    }
    this.initOrdersTable();

    // Add children
    this.container.append(container1, container2, this.container3);
  }

  initOrdersTable() {
    // 3. Container 3. [orders table, pagination]
    this.container3.innerText = "";
    {
      // 3.1. Orders table
      const ordersTable = new OrdersTable(
        "Recent Purchases",
        this.controller.orders
      );
      // 3.2. Pagination
      const pagination = new Pagination(
        this.controller.orders.length,
        7,
        () => {}
      );
      // Add children
      this.container3.append(ordersTable.render(), pagination.render());
    }
  }

  render() {
    return this.container;
  }
}
