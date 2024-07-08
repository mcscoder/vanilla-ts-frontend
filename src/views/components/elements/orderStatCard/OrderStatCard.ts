import {
  arrowDownIcon,
  arrowUpIcon,
  bagHandleIcon,
  threeDotsVerticalIcon,
} from "../../../../constants";
import { Component } from "../../../../types";
import { formatINR } from "../../../../utils";
import { Card } from "../../layouts";
import { Button } from "../button";
import { Container, CreateElement, Icon } from "../htmls";

export class OrderStatCard extends Component {
  constructor(
    private title: string,
    private totalValue: number,
    private percentage: number,
    private dateComparison: string
  ) {
    // Leading class name: "order_stat"

    super("order_stat-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [title, option button]
    // 1.1. Title
    const title = CreateElement("h3", "order_stat-title");
    title.textContent = this.title;
    // 1.2. Option button (three dots)
    const optionButton = new Button({
      startIcon: threeDotsVerticalIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "",
      onClick: () => {},
    });
    // 1.3. Container 1
    const container1 = Container(
      "order_stat-container-1",
      title,
      optionButton.render()
    );

    // 2. Container 2. [bag icon, total value, percentage index]
    // 2.1. Bag icon
    const bagIcon = Icon(bagHandleIcon, "order_stat-bag_icon");
    // 2.2. Total value
    const totalValue = CreateElement("p", "order_stat-total_value", [
      formatINR(this.totalValue),
    ]);
    // 2.3. Percentage
    const percentage = Container(
      "order_stat-percentage_container",
      Icon(this.percentage > 0 ? arrowUpIcon : arrowDownIcon),
      CreateElement("p", "", [`${this.percentage}`])
    );
    // 2.4. Container
    const container2 = Container(
      "order_stat-container-2",
      bagIcon,
      totalValue,
      percentage
    );

    // 3. Container 3. [date comparison]
    // 3.1. Date comparison
    const date = CreateElement("p", "order_stat-date", [
      `Compared to ${this.dateComparison}`,
    ]);
    // 3.2. Container
    const container3 = Container("order_stat-container-3", date);

    // Add children to container
    this.container.append(container1, container2, container3);
  }

  render() {
    return new Card("", this.container).render();
  }
}
