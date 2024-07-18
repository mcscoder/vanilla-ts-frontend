import { Brand, Category, PostProductBody, Product } from "../models";
import { Router } from "../routes";
import { apiService } from "../service";
import { Controller } from "./controller";

export class ProductDetailsController extends Controller {
  product: Product;
  categories: Category[];
  brands: Brand[];

  async fetchData(initContent: () => void) {
    await Promise.allSettled([
      this.fetchProduct(),
      this.fetchCategories(),
      this.fetchBrands(),
    ]);
    initContent();
  }

  private async fetchProduct() {
    const { productId } = Router.getParams();
    if (productId) {
      try {
        this.product = await apiService.request("GET", "getProduct", {
          productId: Number(productId),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  private async fetchCategories() {
    try {
      this.categories = await apiService.request(
        "GET",
        "getCategories",
        undefined
      );
    } catch (error) {
      console.log(error);
    }
  }

  private async fetchBrands() {
    try {
      this.brands = await apiService.request("GET", "getBrands", undefined);
    } catch (error) {
      console.log(error);
    }
  }

  private async updateImages(
    deleteImageIds: number[],
    newImageFiles: (File | undefined)[]
  ) {
    const formData = new FormData();
    newImageFiles.forEach((file) => {
      if (file) {
        formData.append("files", file);
      }
    });

    await Promise.allSettled([
      // 1. Delete images
      apiService.request(
        "DELETE",
        "deleteProductImage",
        undefined,
        undefined,
        deleteImageIds
      ),
      // 2. Update new images
      apiService.request(
        "POST",
        "uploadProductImage",
        { productId: this.product.id },
        undefined,
        formData,
        {},
        false
      ),
    ]);
  }

  // 1. Update
  async updateProduct(
    deleteImageIds: number[],
    newImageFiles: (File | undefined)[]
  ) {
    await Promise.allSettled([
      apiService.request(
        "PATCH",
        "patchProduct",
        {
          productId: this.product.id,
        },
        undefined,
        this.product
      ),
      this.updateImages(deleteImageIds, newImageFiles),
    ]);
  }

  // 2. Delete
  async deleteProduct() {
    await apiService.request("PATCH", "patchDeprecatedProduct", {
      productId: this.product.id,
    });
  }

  // 3. Add
  async addProduct() {
    const {
      name,
      description,
      quantity,
      regularPrice,
      salePrice,
      sku,
      sales,
      brandId,
      categoryId,
    }: PostProductBody = this.product;

    await apiService.request("POST", "postProduct", undefined, undefined, {
      name,
      description,
      quantity,
      regularPrice,
      salePrice,
      sku,
      sales,
      brandId,
      categoryId,
    });
  }
}
