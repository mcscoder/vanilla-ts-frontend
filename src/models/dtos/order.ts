import { Product } from "./product";
import { UserPaymentMethod } from "./user";

export type Order = {
  id: number;
  note: string;
  address: string;
  orderStatusId: number;
  shippingId: number;
  userPaymentMethodId: number;
  createdAt: number;
  orderStatus: OrderStatus;
  shipping: Shipping;
  userPaymentMethod: UserPaymentMethod;
  orderProducts: OrderProduct[];
};

export type OrderStatus = {
  id: number;
  name: string;
};

export type Shipping = {
  id: number;
  name: string;
};

export type OrderProduct = {
  productId: number;
  orderId: number;
  quantity: number;
  price: number;
  product: Product;
};
