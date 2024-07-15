import { Component } from "../../../../../types";
import { Container, CreateElement, Icon } from "../../htmls";
import { Link } from "../../links";

export class CustomerInfo extends Component {
  constructor(
    private icon: string,
    private title: string,
    private descriptions: [title: string, description: string][],
    private linkLabel: string
  ) {
    // Leading class name: "customer_details-information"

    // Container
    super("customer_details-information-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [icon, container 1.1]
    const container1 = Container("customer_details-information-container-1");
    {
      // 1.1. Icon
      const icon = Icon(
        this.icon,
        "customer_details-information-icon",
        [24, 24]
      );
      // 1.2. Container 1.1. [title, descriptions]
      const container1_1 = Container(
        "customer_details-information-container-1-1"
      );
      {
        // 1.2.1. Title
        const title = CreateElement(
          "h4",
          "customer_details-information-title",
          [this.title]
        );
        // 1.2.2. Descriptions
        const descriptions = this.descriptions.map(([title, description]) => {
          return CreateElement(
            "p",
            "customer_details-information-description",
            [`${title}: ${description}`]
          );
        });
        // Add children
        container1_1.append(title, ...descriptions);
      }

      // Add children
      container1.append(icon, container1_1);
    }
    // 2. Related information link
    const link = new Link(
      "#",
      "customer_details-information-link",
      this.linkLabel
    );

    // Add children
    this.container.append(container1, link.render());
  }

  render() {
    return this.container;
  }
}
