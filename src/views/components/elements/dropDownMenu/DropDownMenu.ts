import { chevronDownIcon } from "../../../../constants";
import { Component } from "../../../../types";
import { Container, CreateElement, Icon } from "../htmls";

export type MenuItem = {
  value: number;
  label: string;
};

export class DropDownMenu extends Component<"button"> {
  private isDisplayed = false;
  private optionButtons: HTMLButtonElement[] = [];

  private selectedText = Container("select-selected_text");
  private icon = Icon(chevronDownIcon, "select-icon");
  private dropDownContainer = Container("select-option-container");

  constructor(
    private items: MenuItem[],
    private currentIndex: number,
    private onChange: (item: MenuItem, index: number) => void,
    private defaultText?: string
  ) {
    // Leading class name: "select"

    // Container
    super("select-container", "button");

    // 1. Initialize content
    this.initContent();

    // 2. Initialize events
    this.initEvents();
  }

  initContent() {
    // 1. Add children
    this.container.append(this.selectedText, this.icon);

    // 2. Initialize option buttons
    this.initOptionButtons();
  }

  initEvents() {
    // 1. Container
    this.container.addEventListener("click", (e) => {
      e.stopPropagation();
      this.displayDropDown(!this.isDisplayed);
    });

    // 2. Dropdown container
    this.dropDownContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // 3. Close the dropdown by clicking outside
    window.addEventListener("click", () => {
      if (this.isDisplayed) {
        this.displayDropDown(false);
      }
    });
  }

  initOptionButtons() {
    // 1. Create the default option button if it's provided
    if (this.defaultText) {
      const defaultOptionButton = CreateElement(
        "button",
        "select-option-button",
        [this.defaultText]
      );
      defaultOptionButton.addEventListener(
        "click",
        this.onClickOption.bind(
          this,
          { value: -1, label: this.defaultText },
          this.optionButtons.length
        )
      );
      this.optionButtons.push(defaultOptionButton);
    }

    // 2. Create option buttons for each option in the provided array
    this.items.forEach(({ value, label }) => {
      const optionButton = CreateElement("button", "select-option-button", [
        label,
      ]);

      // Use the length of the array to specific the index of the option
      optionButton.addEventListener(
        "click",
        this.onClickOption.bind(
          this,
          { value, label },
          this.optionButtons.length
        )
      );

      // Push the button into the array
      this.optionButtons.push(optionButton);
    });

    // Render the options
    this.renderOptions();

    // Append the option buttons to dropdown container
    this.dropDownContainer.append(...this.optionButtons);

    // Set the initial selected text
    this.selectedText.textContent =
      this.optionButtons[this.currentIndex].textContent;
  }

  renderOptions() {
    const selectedButtonClassName = "select-option-button-current";
    this.optionButtons.forEach((button, index) => {
      if (index === this.currentIndex) {
        button.classList.add(selectedButtonClassName);
        this.selectedText.textContent = button.textContent;
      } else {
        button.classList.remove(selectedButtonClassName);
      }
    });
  }

  displayDropDown(isDisplay: boolean) {
    const expandedIconClassName = "select-icon-expanded";
    if (isDisplay) {
      this.container.appendChild(this.dropDownContainer);
      this.icon.classList.add(expandedIconClassName);
    } else {
      this.container.removeChild(this.dropDownContainer);
      this.icon.classList.remove(expandedIconClassName);
    }
    this.isDisplayed = isDisplay;
  }

  onClickOption({ value, label }: MenuItem, optionIndex: number) {
    this.currentIndex = optionIndex;
    this.renderOptions();
    this.displayDropDown(false);
    this.onChange({ value, label }, optionIndex);
  }

  getValue(): number {
    return this.items[this.currentIndex].value;
  }

  render() {
    return this.container;
  }
}
