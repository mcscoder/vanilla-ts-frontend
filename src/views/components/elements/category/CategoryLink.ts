import { CustomEventManager } from "../../../../events";
import { CategoryData } from "../../../../models";
import { Router, routerStates } from "../../../../routes";
import { CreateElement } from "../htmls";
import { Link } from "../links";
import { Tag } from "../tag";

// Category item
export class CategoryLink extends Link {
  private tag: Tag;
  constructor(private categoryData: CategoryData) {
    const path = `/products/${categoryData.data.id}`;
    super(path, "category-link");

    // 1. Initialize content
    this.initContent();

    // 2. Initialize events
    this.initEvents();
  }

  initContent() {
    // 1. Text
    const text = CreateElement("span", "category-link-label");
    text.textContent = this.categoryData.data.name;

    // 2. Tag
    this.tag = new Tag(`${this.categoryData.data.quantity}`, "categories", 0);
    this.initTagClassName();

    // Add children to container
    this.container.append(text, this.tag.render());
  }

  private initEvents() {
    CustomEventManager.addEventListener(
      "urlChanged",
      this.initTagClassName.bind(this)
    );
  }

  private initTagClassName() {
    setTimeout(() => {
      const screenPath = "/products/:categoryId";
      if (screenPath === routerStates.currentScreenPath) {
        const { categoryId } = Router.getParams();
        if (Number(categoryId) === this.categoryData.data.id) {
          this.tag.updateTagVariant("categories", 1);
          return;
        }
      }
      this.tag.updateTagVariant("categories", 0);
    }, 0);
  }

  render() {
    return this.container;
  }
}
