// ApiEndpoints.ts
type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";
type EndpointFunction<T = object> = (arg: T) => string;

interface ApiEndpoints {
  getOrder: EndpointFunction<{ orderId: number }>;
  getOrders: EndpointFunction<{ orderId?: number }>;
  getCategory: EndpointFunction<{ categoryId: number }>;
  getCategories: EndpointFunction<void>;
  getProduct: EndpointFunction<{ productId: number }>;
  getProducts: EndpointFunction<{ categoryId?: number }>;
  getOrderStatuses: EndpointFunction<void>;
  getBrands: EndpointFunction<void>;
  patchProduct: EndpointFunction<{ productId: number }>;
  deleteProductImage: EndpointFunction<void>;
  uploadProductImage: EndpointFunction<{ productId: number }>;
  patchDeprecatedProduct: EndpointFunction<{ productId: number }>;
  postProduct: EndpointFunction<void>;
  adminAuthentication: EndpointFunction<void>;
  register: EndpointFunction<void>;
  getBestSellerProducts: EndpointFunction<void>;
}

const endpoints: ApiEndpoints = {
  getOrder: ({ orderId }) => `/api/order/${orderId}`,
  getOrders: ({ orderId = "" }) => `/api/orders/${orderId}`,
  getCategory: ({ categoryId }) => `/api/category/${categoryId}`,
  getCategories: () => `/api/categories`,
  getProduct: ({ productId }) => `/api/product/${productId}`,
  getProducts: ({ categoryId = "" }) => `/api/products/${categoryId}`,
  getOrderStatuses: () => `/api/orderStatuses`,
  getBrands: () => `/api/brands`,
  patchProduct: ({ productId }) => `/api/products/${productId}`,
  deleteProductImage: () => `/api/product-images`,
  uploadProductImage: ({ productId }) =>
    `/api/upload/product-image/${productId}`,
  patchDeprecatedProduct: ({ productId }) => `/api/product/${productId}`,
  postProduct: () => `/api/products`,
  adminAuthentication: () => `/api/admin-authentication`,
  register: () => `/api/admins`,
  getBestSellerProducts: () => `/api/products-best-sellers`,
};

class ApiService {
  async request<T, K extends keyof ApiEndpoints>(
    method: HttpMethod,
    endpointKey: K,
    params: Parameters<ApiEndpoints[K]>[0],
    searchParams?: [key: string, value: string][],
    body?: unknown,
    headers: Record<string, string> = { "Content-Type": "application/json" }
  ): Promise<T> {
    const endpointFunction = endpoints[endpointKey] as EndpointFunction<
      Parameters<ApiEndpoints[typeof endpointKey]>[0]
    >;
    let url = endpointFunction(params);

    if (searchParams) {
      url += "?" + searchParams.map((search) => search.join("=")).join("&");
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }
}

export const apiService = new ApiService();
