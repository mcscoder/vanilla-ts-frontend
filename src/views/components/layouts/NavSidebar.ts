import {
  albumsIcon,
  dashboardIcon,
  documentTextIcon,
  logoIcon,
} from "../../../constants";
import { CategoryData } from "../../../models";
import { Component } from "../../../types";
import { CategoryMenu, CreateElement, Icon, NavLink } from "../elements";

const navigationLinkItems = [
  {
    startIcon: dashboardIcon,
    label: "dashboard",
    to: "/",
    screenPaths: ["/"],
  },
  {
    startIcon: albumsIcon,
    label: "all products",
    to: `/products`,
    screenPaths: ["/products", "/products/:categoryId"],
  },
  {
    startIcon: documentTextIcon,
    label: "order list",
    to: "/orders",
    screenPaths: ["/orders"],
  },
];

export class NavSidebar extends Component {
  constructor() {
    // Leading class name: primary_sidebar

    // Container
    super("primary_sidebar sidebar-hide");

    // Initialize content
    this.initContent();
  }

  initContent() {
    // Content container
    const contentContainer = CreateElement("div", "primary_sidebar-container");

    // 1. Sidebar logo
    const logo = Icon(logoIcon, "center");

    // 2. NavLinks container
    const navLinkContainer = CreateElement(
      "nav",
      "primary_sidebar-nav_container"
    );

    // 2.1. Add navigation link items to the container
    navigationLinkItems.forEach((item) => {
      const navLink = new NavLink(
        item.startIcon,
        item.label,
        item.to,
        item.screenPaths
      );
      navLinkContainer.append(navLink.render());
    });

    // 3. Categories menu
    const categoryMenu = new CategoryMenu([
      new CategoryData({ id: 1, name: "light tanks", quantity: 12 }),
      new CategoryData({ id: 2, name: "light tanks", quantity: 12 }),
      new CategoryData({ id: 3, name: "light tanks", quantity: 12 }),
      new CategoryData({ id: 4, name: "light tanks", quantity: 12 }),
    ]);

    // Add children to content container
    contentContainer.append(logo, navLinkContainer, categoryMenu.render());

    // Add children to container
    this.container.append(contentContainer);
  }

  render() {
    return this.container;
  }
}
