export type FetchProductTypes =
  "FETCH_PRODUCT_REQUEST" |
  "FETCH_PRODUCT_SUCCESS" |
  "FETCH_PRODUCT_FAILURE"

export interface ProductStore {
  data?: Product[],
  isLoading?: boolean,
  error?: string
}

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  createdAt: number,
  updatedAt: number
}

export const FETCH_PRODUCT_REQUEST: FetchProductTypes = "FETCH_PRODUCT_REQUEST"
export const FETCH_PRODUCT_SUCCESS: FetchProductTypes = "FETCH_PRODUCT_SUCCESS"
export const FETCH_PRODUCT_FAILURE: FetchProductTypes = "FETCH_PRODUCT_FAILURE"

export interface ProductAction {
  type: FetchProductTypes,
  payload: Product[],
  message?: string
}

export interface ProductProps {
  product: ProductStore,
  fetchProductRequest: () => void
}