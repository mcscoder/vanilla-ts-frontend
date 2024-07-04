import { chevronDownIcon, chevronUpIcon } from "../../../../constants";
import { CategoryData } from "../../../../models";
import { Component } from "../../../../types";
import { CreateElement, Icon } from "../htmls";
import { CategoryLink } from "./CategoryLink";

export class CategoryMenu extends Component {
  isExpanded: boolean;
  private iconContainer: HTMLDivElement;
  private linkContainer: HTMLElement;
  constructor(private categoriesData: CategoryData[]) {
    // Leading class name: "category_menu"
    super("category_menu-container");
    this.isExpanded = true;
    this.initContent();
  }

  initContent() {
    // 1. Header section --------------------
    // 1.1. Header container
    const headerContainer = CreateElement(
      "div",
      "category_menu-container-header_container"
    );

    // 1.2. Header text
    const headerText = CreateElement("div");
    headerText.textContent = "Categories";

    // 1.3. Header icon
    this.initHeaderIcon();

    // 1.4. Add children to header container
    headerContainer.append(headerText, this.iconContainer);

    // 1.5. Add "click" event to header container
    headerContainer.addEventListener("click", this.handleToggling.bind(this));

    // Add children to container
    this.container.append(headerContainer);

    // Initialize category links
    this.initCategoryLinks();
  }

  private initHeaderIcon() {
    this.iconContainer = Icon(
      this.isExpanded ? chevronUpIcon : chevronDownIcon
    );
  }

  private initCategoryLinks() {
    if (this.isExpanded) {
      // If `isExpanded` state is `true`
      // Initialize the category links to the view
      this.linkContainer = CreateElement("nav", "category_menu-container-body");
      this.categoriesData.forEach((categoryData) => {
        const categoryLink = new CategoryLink(categoryData);
        this.linkContainer.append(categoryLink.render());
      });

      this.container.append(this.linkContainer);
    } else {
      // Otherwise hide it by remove() method
      this.linkContainer.remove();
    }
  }

  private handleToggling() {
    this.isExpanded = !this.isExpanded;
    this.initCategoryLinks();
    this.initHeaderIcon();
  }

  render() {
    return this.container;
  }
}
