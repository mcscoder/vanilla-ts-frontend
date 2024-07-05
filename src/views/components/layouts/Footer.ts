import { Component } from "../../../types";
import { CreateElement, Link } from "../elements";

export class Footer extends Component<"footer"> {
  constructor() {
    // Leading class name: "primary_footer"

    super("primary_footer", "footer");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Copyright
    const copyright = CreateElement("p", "primary_footer-copyright");
    copyright.textContent = "© 2023 - pulstron Dashboard";

    // 2. Navigation
    const nav = CreateElement("nav", "primary_footer-nav");
    this.initFooterLinks(nav);

    // Add children
    this.container.append(copyright, nav);
  }

  private initFooterLinks(nav: HTMLElement) {
    const footerLinkItems = [
      {
        text: "About",
        to: "#",
      },
      {
        text: "Careers",
        to: "#",
      },
      {
        text: "Policy",
        to: "#",
      },
      {
        text: "Contact",
        to: "#",
      },
    ];

    footerLinkItems.forEach(({ text, to }) => {
      const link = new Link(to, "", text);
      nav.append(link.render());
    });
  }

  render() {
    return this.container;
  }
}
