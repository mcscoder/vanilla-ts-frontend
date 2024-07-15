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

export const screenPaths = {
  home: {
    path: "/",
    name: "Dashboard",
  },
  allProducts: {
    path: "/products",
    name: "All Products",
  },
  productsByCategory: {
    path: "/products/:categoryId",
    name: "All Products",
  },
  ordersList: {
    path: "/orders",
    name: "Orders List",
  },
  orderDetails: {
    path: "/order-details/:orderId",
    name: "Order Details",
  },
  productDetails: {
    path: "/product-details/:productId",
    name: "Product Details",
  },
  login: {
    path: "/login",
    name: "Login",
  },
};

export const routes: Route[] = [
  {
    path: "",
    component: new MainLayout(),
    children: [
      { path: screenPaths.home.path, component: new Home() },
      { path: screenPaths.allProducts.path, component: new AllProducts() },
      {
        path: screenPaths.productsByCategory.path,
        component: new AllProducts(),
      },
      { path: screenPaths.ordersList.path, component: new OrderList() },
      { path: screenPaths.orderDetails.path, component: new OrderDetails() },
      {
        path: screenPaths.productDetails.path,
        component: new ProductDetails(),
      },
    ],
  },
  {
    path: screenPaths.login.path,
    component: new Login(),
  },
];
