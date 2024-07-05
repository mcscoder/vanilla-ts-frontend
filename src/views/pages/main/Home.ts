import { ScreenLayout } from "../../../types";
import { Breadcrumb, Container, OrderStatCard } from "../../components";

export class Home extends ScreenLayout {
  constructor() {
    // Leading class name: "dashboard"
    super("dashboard-container");

    // 1. Initialize content
    this.initContent();
  }

  initData() {}

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

    this.container.append(container1, container2);
  }

  render() {
    return this.container;
  }
}
