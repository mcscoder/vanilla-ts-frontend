import { Component } from "../../../../types";

const VARIANTS = {
  categories: ["tag tag-category", "tag tag-category tag-category-active"],
  orderStatuses: [
    "tag tag-order_details tag-order_details-0", // delivered
    "tag tag-order_details tag-order_details-1", // canceled
    "tag tag-order_details tag-order_details-2", // transport
    "tag tag-order_details tag-order_details-3", // pending
  ],
};

export type TagVariant = keyof typeof VARIANTS;

export class Tag extends Component {
  constructor(text: string, variant: TagVariant, type: number) {
    const className = VARIANTS[variant][type];
    super(className);
    this.container.textContent = text;
  }

  initContent() {}

  updateTagVariant(variant: TagVariant, type: number) {
    this.container.className = VARIANTS[variant][type];
  }

  render() {
    return this.container;
  }
}
