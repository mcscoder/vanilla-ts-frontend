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

export const routerStates = {
  currentScreenPath: location.pathname,
};

export type Route = {
  path: string;
  component: ScreenLayout;
  children?: Route[];
};

export const routes: Route[] = [
  {
    path: "",
    component: new MainLayout(),
    children: [
      { path: "/", component: new Home() },
      { path: "/products", component: new AllProducts() },
      { path: "/products/:categoryId", component: new AllProducts() },
      { path: "/orders", component: new OrderList() },
      { path: "/orders-details/:orderId", component: new OrderDetails() },
      { path: "/product-details/:productId", component: new ProductDetails() },
    ],
  },
  {
    path: "/login",
    component: new Login(),
  },
];
