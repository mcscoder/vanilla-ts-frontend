import { CustomEventManager } from "../../../../events";
import { Router, routerStates } from "../../../../routes";
import { Component } from "../../../../types";
import { Container } from "../htmls";

export class NavLink extends Component<"a"> {
  constructor(
    private startIcon: string,
    private text: string,
    private to: string,
    private screenPaths: string[]
  ) {
    // Navigation link
    super("nav_link", "a");
    this.container.href = this.to;

    // 1. Initialize class name
    this.initClassName();

    // 2. Initialize content
    this.initContent();

    // 3. Initialize event
    this.initEvent();
  }

  initContent() {
    // Children --------------------
    // 1. Start icon
    const icon = Container();
    icon.innerHTML = this.startIcon;

    // 2. Label
    const label = Container();
    label.textContent = this.text;

    // Add container children
    this.container.append(icon, label);
  }

  private initClassName() {
    // Move this to the end of call stack
    setTimeout(() => {
      let isPathMatched = false;
      this.screenPaths.forEach((screenPath) => {
        if (screenPath === routerStates.currentScreenPath) {
          isPathMatched = true;
        }
      });

      if (isPathMatched) {
        // Highlight to the element if path is matched
        this.container.classList.add("nav_link-active");
      } else {
        // Otherwise remove highlight if it's presenting
        this.container.classList.remove("nav_link-active");
      }
    }, 0);
  }

  private initEvent() {
    this.container.addEventListener("click", (event) => {
      event.preventDefault();
      Router.navigateTo(this.to);
    });

    CustomEventManager.addEventListener(
      "urlChanged",
      this.initClassName.bind(this)
    );
  }

  render() {
    return this.container;
  }
}
