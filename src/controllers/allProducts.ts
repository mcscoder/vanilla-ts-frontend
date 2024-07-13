import { Product } from "../models";
import { Router } from "../routes";
import { apiService } from "../service";
import { Controller } from "./controller";

export class AllProductsController extends Controller {
  products: Product[];

  async fetchData(initContent: () => void) {
    await Promise.allSettled([this.fetchProducts()]);
    initContent();
  }

  private async fetchProducts() {
    try {
      const params: { categoryId?: number } = {};
      const { categoryId } = Router.getParams();
      if (categoryId) {
        params.categoryId = Number(categoryId);
      }

      const search = Router.getSearchParam("search");
      const searchParam: [string, string][] = search
        ? [["search", search]]
        : [];

      this.products = await apiService.request(
        "GET",
        "getProducts",
        params,
        searchParam
      );
    } catch (error) {
      console.log(error);
    }
  }
}
