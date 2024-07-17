import { Brand } from "./brand";
import { Category } from "./category";
import { ProductImage } from "./productImage";

export type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  regularPrice: number;
  salePrice: number;
  sku: string;
  sales: number;
  categoryId: number;
  brandId: number;
  brand: Brand;
  category: Category;
  productImages: ProductImage[];
};

export type PostProductBody = Pick<
  Product,
  | "name"
  | "description"
  | "quantity"
  | "regularPrice"
  | "salePrice"
  | "sku"
  | "sales"
  | "brandId"
  | "categoryId"
>;
