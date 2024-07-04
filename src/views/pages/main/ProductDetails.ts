import { ScreenLayout } from "../../../types";
import { Text } from "../../components";

export class ProductDetails extends ScreenLayout {
  constructor() {
    super("product_details");
  }

  initData() {}

  initContent() {
    const heading = Text("h1", "ProductDetails");
    this.container.append(heading);
  }

  render() {
    return this.container;
  }
}
