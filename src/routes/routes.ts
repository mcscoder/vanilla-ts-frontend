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
  newProduct: {
    path: "/new-product",
    name: "New Product",
  },
  login: {
    path: "/login",
    name: "Login",
  },
  register: {
    path: "/register",
    name: "Register",
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
        component: new ProductDetails(false),
      },
      {
        path: screenPaths.newProduct.path,
        component: new ProductDetails(true),
      },
    ],
  },
  {
    path: screenPaths.login.path,
    component: new Login(),
  },
  {
    path: screenPaths.register.path,
    component: new Login(true),
  },
];
