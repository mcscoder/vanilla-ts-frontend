import { Component } from "../../../../types";

const VARIANTS = {
  category_Normal: "tag tag-category",
  category_Active: "tag tag-category tag-category-active",
  orderDetails_delivered: "tag tag-order_details tag-order_details-0", // delivered
  orderDetails_canceled: "tag tag-order_details tag-order_details-1", // canceled
  orderDetails_transport: "tag tag-order_details tag-order_details-2", // transport
  orderDetails_pending: "tag tag-order_details tag-order_details-3", // pending
};

export type TagVariant = keyof typeof VARIANTS;

export class Tag extends Component {
  constructor(text: string, variant: TagVariant) {
    const className = VARIANTS[variant];
    super(className);
    this.container.textContent = text;
  }

  initContent() {}

  updateTagVariant(variant: TagVariant) {
    this.container.className = VARIANTS[variant];
  }

  render() {
    return this.container;
  }
}
