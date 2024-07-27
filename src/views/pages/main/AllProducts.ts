import { addCircleIcon } from "../../../constants";
import { AllProductsController } from "../../../controllers";
import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Button,
  Container,
  Pagination,
  ProductCard,
} from "../../components";

export class AllProducts extends ScreenLayout<AllProductsController> {
  productGrid: HTMLDivElement = Container("all_products-container-2-1");
  constructor() {
    // Leading class name: "all_products"

    // Container
    super("all_products-container", new AllProductsController());
  }

  initData() {
    super.initData();
    this.controller.fetchData(this.initContent.bind(this));
  }

  initContent() {
    this.container.innerText = "";

    // 1. Container 1. [breadcrumb, add new product button]
    const container1 = Container("all_products-container-1");
    {
      // 1.1. Breadcrumb
      const breadcrumb = new Breadcrumb(["allProducts"]);
      // 1.2. Button
      const button = new Button({
        startIcon: addCircleIcon,
        text: "add new product",
        onClick: () => {
          Router.navigateTo("/new-product");
        },
      });
      // Add children
      container1.append(breadcrumb.render(), button.render());
    }

    // 2. Container 2. [product grid, pagination]
    const container2 = Container("all_products-container-2");
    {
      // 2.1. Product grid
      this.productGrid;
      // 2.2. Pagination
      const pagination = new Pagination(
        this.controller.products.length,
        12,
        (pageIndex, start, end) => {
          pageIndex;
          this.initProductCards(start, end);
        }
      );
      // Add children
      container2.append(this.productGrid, pagination.render());
    }

    // Add children
    this.container.append(container1, container2);
  }

  private initProductCards(start: number, end: number) {
    this.productGrid.innerText = "";
    this.controller.products.slice(start, end).forEach((product) => {
      const productCard = new ProductCard(product);
      this.productGrid.append(productCard.render());
    });
  }

  render() {
    return this.container;
  }
}
