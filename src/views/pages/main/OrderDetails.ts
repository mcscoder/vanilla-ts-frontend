import { OrderDetailsController } from "../../../controllers";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Container,
  CustomerDetailsSection,
  OrderedProductsSection,
} from "../../components";

export class OrderDetails extends ScreenLayout<OrderDetailsController> {
  constructor() {
    // Leading class name: "order_details"

    // Container
    super("order_details-container", new OrderDetailsController());
  }

  initData() {
    super.initData();
    this.controller.fetchData(this.initContent.bind(this));
  }

  initContent() {
    // 1. Container 1. [breadcrumb]
    const container1 = Container("order_details-container-1");
    {
      // 1.1. Breadcrumb
      const breadcrumb = new Breadcrumb(["ordersList", "orderDetails"]);
      // Add children
      container1.append(breadcrumb.render());
    }

    // 2. Customer information section
    const customerSection = new CustomerDetailsSection(
      this.controller.order,
      this.controller.orderStatuses,
      (orderStatusId, note) => {
        this.controller.onSave(orderStatusId, note, this.initData.bind(this));
      }
    );

    // 3. Ordered products section
    const productsSection = new OrderedProductsSection(this.controller.order);

    // Add children
    this.container.append(
      container1,
      customerSection.render(),
      productsSection.render()
    );
  }

  render() {
    return this.container;
  }
}
