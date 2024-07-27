import { HomeController } from "../../../controllers";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Card,
  Container,
  OrdersTable,
  OrderStatCard,
  ProductStatCard,
  SaleGraph,
} from "../../components";
export class Home extends ScreenLayout<HomeController> {
  constructor() {
    // Leading class name: "dashboard"

    // Container
    super("dashboard-container", new HomeController());
  }

  async initData() {
    super.initData();
    this.controller.fetchData(this.initContent.bind(this));
  }

  initContent() {
    // 1. Container 1. [breadcrumb, calendar]
    // 1.1. Breadcrumb
    const breadcrumb = new Breadcrumb(["home"]);
    // 1.2. Container
    const container1 = Container("dashboard-container-1", breadcrumb.render());

    // 2. Container 2. [order's stat cards]
    // 2.1. Total order
    const totalOrder = new OrderStatCard(
      "Total Orders",
      126.5,
      34.7,
      "Oct 2023"
    );
    // 2.2. Container
    const container2 = Container(
      "dashboard-container-2",
      totalOrder.render(),
      new OrderStatCard("Total Orders", 126.5, 34.7, "Oct 2023").render(),
      new OrderStatCard("Total Orders", 126.5, 34.7, "Oct 2023").render(),
      new OrderStatCard("Total Orders", 126.5, 34.7, "Oct 2023").render()
    );

    // 3. Container 3. [sale graph, best sellers card]
    // 3.1. Sale graph
    const saleGraph = new Card(
      "dashboard-container-3-graph",
      new SaleGraph().render()
    );
    // 3.2. Best sellers card
    const bestSellersCard = new Card(
      "",
      new ProductStatCard("Best sellers", this.controller.bestSellers).render()
    );
    // 3.3. Container
    const container3 = Container(
      "dashboard-container-3",
      saleGraph.render(),
      bestSellersCard.render()
    );

    // 4.1. Orders table
    const ordersTable = new OrdersTable(
      "Recent Orders",
      this.controller.orders
    );

    this.container.append(
      container1,
      container2,
      container3,
      ordersTable.render()
    );
  }

  render() {
    return this.container;
  }
}
