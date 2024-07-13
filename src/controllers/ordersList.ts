import { Order, OrderStatus } from "../models";
import { apiService } from "../service";
import { Controller } from "./controller";

export class OrdersListController extends Controller {
  orderStatuses: OrderStatus[];
  orders: Order[];

  async fetchData(initContent: () => void) {
    await Promise.allSettled([this.fetchOrderStatuses(), this.fetchOrders()]);
    initContent();
  }

  private async fetchOrderStatuses() {
    try {
      this.orderStatuses = await apiService.request(
        "GET",
        "getOrderStatuses",
        undefined
      );
    } catch (error) {
      console.log(error);
    }
  }

  async fetchOrders(orderStatusId?: number) {
    try {
      this.orders = await apiService.request("GET", "getOrders", {
        orderStatusId,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
