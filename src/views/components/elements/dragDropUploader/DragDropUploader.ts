import { Component } from "../../../../types";
import { CreateElement } from "../htmls";

export class DragDropUploader extends Component {
  constructor(
    className: string,
    private onDrop: (file: FileList) => void,
    private children: HTMLElement[]
  ) {
    // Container
    super(className);

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // Prevent default behaviors for drag and drop events
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      this.container.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    // Handle file drop event
    this.container.addEventListener("drop", (e) => {
      const files = e.dataTransfer?.files;
      if (files) {
        this.onDrop(files);
      }
    });

    // Create a hidden input element for file selection
    const input = CreateElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = "image/*";
    input.hidden = true;

    // Open file dialog on click event
    this.container.addEventListener("click", () => {
      input.click();
    });

    // Handle file selection from the input element
    input.addEventListener("change", () => {
      if (input.files) {
        this.onDrop(input.files);
      }
    });

    this.container.append(...this.children);
  }

  render() {
    return this.container;
  }
}
