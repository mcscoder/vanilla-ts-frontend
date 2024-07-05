import {
  chevronDownIcon,
  notificationsIcon,
  searchIcon,
} from "../../../constants";
import { Component } from "../../../types";
import { Button } from "../elements";

export class Header extends Component<"header"> {
  constructor() {
    // Leading class name: "primary_header"
    super("primary_header", "header");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Search button
    const searchButton = new Button({
      startIcon: searchIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "",
      onClick: () => {},
    });

    // 2. Notification button
    const notificationButton = new Button({
      startIcon: notificationsIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "",
      onClick: () => {},
    });

    // 3. Account button
    const accountButton = new Button({
      text: "Son Mai", // Data for testing
      endIcon: chevronDownIcon,
      variant: "primary",
      size: "sm",
      type: "outlined",
      className: "",
      onClick: () => {},
    });

    // Add children to container
    this.container.append(
      searchButton.render(),
      notificationButton.render(),
      accountButton.render()
    );
  }

  render(): HTMLElement {
    return this.container;
  }
}
