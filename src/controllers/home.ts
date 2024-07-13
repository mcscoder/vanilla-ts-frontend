import { Order, Product } from "../models";
import { apiService } from "../service";
import { Controller } from "./controller";

export class HomeController extends Controller {
  bestSellers: Product[];
  orders: Order[];

  async fetchData(initContent: () => void) {
    await Promise.allSettled([this.fetchBestSellers(), this.fetchOrders()]);
    initContent();
  }

  private async fetchBestSellers() {
    try {
      this.bestSellers = await apiService.request(
        "GET",
        "getBestSellerProducts",
        undefined
      );
    } catch (error) {
      console.log(error);
    }
  }

  private async fetchOrders() {
    try {
      this.orders = await apiService.request("GET", "getOrders", {});
    } catch (error) {
      console.log(error);
    }
  }
}
