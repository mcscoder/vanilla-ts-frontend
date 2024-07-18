import { ProductDetailsController } from "../../../controllers/productDetails";
import { Router } from "../../../routes";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Card,
  Container,
  ProductDetailsForm,
  Toast,
} from "../../components";

export class ProductDetails extends ScreenLayout<ProductDetailsController> {
  constructor() {
    // Leading class name: "product_details"

    // Container
    super("product_details-container", new ProductDetailsController());
  }

  initData() {
    super.initData();
    this.controller.fetchData(this.initContent.bind(this));
  }

  initContent() {
    // 1. Container 1. [breadcrumb]
    const container1 = Container("product_details-container-1");
    {
      // 1.1. Breadcrumb
      const breadcrumb = new Breadcrumb(["allProducts", "productDetails"]);
      // Add children
      container1.append(breadcrumb.render());
    }

    // 2. Container 2. [product details form]
    const container2 = new Card("");
    {
      // 1. Product details form
      const productDetailsForm = new ProductDetailsForm(
        this.controller.product,
        this.controller.categories,
        this.controller.brands,
        {
          onUpdate: async () => {
            await this.controller.updateProduct(
              productDetailsForm.productGallery.deleteImageIds,
              productDetailsForm.productGallery.newImageFiles
            );
            Toast.alert({
              message: "Update product success",
              type: "SUCCESS",
            });
            this.initData();
          },
          onDelete: async () => {
            await this.controller.deleteProduct();
            Router.navigateTo("/products");
            Toast.alert({
              message: "Update product success",
              type: "SUCCESS",
            });
          },
          onCancel: () => {},
          onAdd: async () => {
            await this.controller.addProduct();
            Router.navigateTo("/products");
            Toast.alert({
              message: "Product has been added",
              type: "SUCCESS",
            });
          },
        }
      );
      // Add children
      container2.container.append(productDetailsForm.render());
    }

    // Add children
    this.container.append(container1, container2.render());
  }

  render() {
    return this.container;
  }
}
