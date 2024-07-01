import { ScreenLayout } from "../types";
import { MainLayout } from "../views/components";
import {
  AllProducts,
  Home,
  Login,
  OrderDetails,
  OrderList,
  ProductDetails,
} from "../views/pages";

export type Route = {
  path: string;
  component: new () => ScreenLayout;
  children?: Route[];
};

export const routes: Route[] = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "/", component: Home },
      { path: "/products", component: AllProducts },
      { path: "/orders", component: OrderList },
      { path: "/orders-details/:orderId", component: OrderDetails },
      { path: "/product-details/:productId", component: ProductDetails },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
