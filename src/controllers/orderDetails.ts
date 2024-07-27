import { Order, OrderStatus } from "../models";
import { Router } from "../routes";
import { apiService } from "../service";
import { Toast } from "../views/components";
import { Controller } from "./controller";

export class OrderDetailsController extends Controller {
  orderStatuses: OrderStatus[];
  order: Order;

  async fetchData(initContent: () => void) {
    await Promise.allSettled([this.fetchOrderStatuses(), this.fetchOrder()]);
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

  private async fetchOrder() {
    try {
      const { orderId } = Router.getParams();

      if (orderId) {
        this.order = await apiService.request("GET", "getOrder", {
          orderId: Number(orderId),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onSave(orderStatusId: number, note: string, initContent: () => void) {
    try {
      const { orderId } = Router.getParams();
      await apiService.request(
        "PATCH",
        "patchOrder",
        { orderId: Number(orderId) },
        undefined,
        {
          orderStatusId,
          note,
        }
      );
      Toast.alert({ message: "Order has been updated", type: "SUCCESS" });
      initContent();
    } catch (error) {
      console.log(error);
    }
  }
}
