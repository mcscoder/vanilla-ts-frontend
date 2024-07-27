import { Category } from "../models";
import { apiService } from "../service";
import { Controller } from "./controller";

export class MainLayoutController extends Controller {
  categories: Category[];
  async fetchData(initContent: () => void) {
    await Promise.allSettled([this.fetchCategories()]);
    initContent();
  }

  private async fetchCategories() {
    try {
      this.categories = await apiService.request(
        "GET",
        "getCategories",
        undefined,
        undefined
      );
    } catch (error) {
      console.log(error);
    }
  }
}
