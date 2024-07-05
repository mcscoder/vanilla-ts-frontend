import { Component } from "../../../types";
import { Container } from "../elements";

export class Overlay extends Component {
  contentContainer: HTMLDivElement;
  constructor() {
    // Leading class name: "overlay"

    // Container
    super("overlay-container");

    // 1. Initialize content
    this.initContent();

    // 2. Initialize events
    this.initEvents();
  }

  initContent() {
    // 1. Content container
    this.contentContainer = Container("overlay-container-content_container");

    // Add content container to container
    this.container.append(this.contentContainer);
  }

  private initEvents() {
    // 1. Close the overlay by clicking outside of content container
    this.container.addEventListener("click", () => {
      this.display.call(this, false);
    });

    // 2. Prevent event propagation when clicking to content container
    // This will prevent the overlay closing
    this.contentContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  // Display the overlay component
  display(isDisplay: boolean, ...children: HTMLElement[]) {
    const app = document.querySelector<HTMLDivElement>("#app");
    if (isDisplay) {
      // Show the overlay with content provided
      this.contentContainer.append(...children);
      app?.appendChild(this.container);
    } else {
      // Close the overlay and clear all of contents
      app?.removeChild(this.container);
      this.contentContainer.innerText = "";
    }
  }

  render() {
    return this.container;
  }
}
