import { Brand, Category, Product } from "../models";
import { Router } from "../routes";
import { apiService } from "../service";
import { Controller } from "./controller";

export class ProductDetailsController extends Controller {
  product: Product;
  categories: Category[];
  brands: Brand[];

  async fetchData(initContent: () => void) {
    await Promise.allSettled([
      this.fetchProduct(),
      this.fetchCategories(),
      this.fetchBrands(),
    ]);
    initContent();
  }

  private async fetchProduct() {
    const { productId } = Router.getParams();
    if (productId) {
      try {
        this.product = await apiService.request("GET", "getProduct", {
          productId: Number(productId),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  private async fetchCategories() {
    try {
      this.categories = await apiService.request(
        "GET",
        "getCategories",
        undefined
      );
    } catch (error) {
      console.log(error);
    }
  }

  private async fetchBrands() {
    try {
      this.brands = await apiService.request("GET", "getBrands", undefined);
    } catch (error) {
      console.log(error);
    }
  }
}
