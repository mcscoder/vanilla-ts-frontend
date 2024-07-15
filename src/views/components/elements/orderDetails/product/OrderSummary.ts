import { Component } from "../../../../../types";
import { formatINR } from "../../../../../utils";
import { Container, CreateElement } from "../../htmls";

export class OrderSummary extends Component {
  constructor(
    private totalProductsPrice: number,
    private discountPercent: number = 0,
    private shippingRate: number = 0
  ) {
    // Leading class name: "ordered_products-order_summary"

    // Container
    super("ordered_products-order_summary-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // Initialize sub-details
    this.container.append(
      this.subDetails("Subtotal", this.totalProductsPrice),
      this.subDetails("Tax (20%)", this.totalProductsPrice * 0.2),
      this.subDetails(
        "Discount",
        this.totalProductsPrice * this.discountPercent
      ),
      this.subDetails("Shipping Rate", this.shippingRate),
      this.subDetails(
        "Total",
        this.totalProductsPrice +
          this.totalProductsPrice * 0.2 -
          this.totalProductsPrice * this.discountPercent +
          this.shippingRate,
        "ordered_products-order_summary-final_amount"
      )
    );
  }

  subDetails(title: string, number: number, className: string = "") {
    const container = Container(
      `ordered_products-order_summary-sub_details ${className}`,
      CreateElement("p", "", [title]),
      CreateElement("p", "", [formatINR(number)])
    );

    return container;
  }

  render() {
    return this.container;
  }
}
