export type ProductFetchTypes =
  "FETCH_PRODUCT_REQUEST" |
  "FETCH_PRODUCT_SUCCESS" |
  "FETCH_PRODUCT_FAILURE"

export interface ProductStore {
  data?: Product[],
  isLoading?: boolean,
  error?: string
}

export interface ProductFetchAction extends ProductStore{
  type: ProductFetchTypes
}

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  createdAt: number,
  updatedAt: number
}

export const FETCH_PRODUCT_REQUEST: ProductFetchTypes = "FETCH_PRODUCT_REQUEST"
export const FETCH_PRODUCT_SUCCESS: ProductFetchTypes = "FETCH_PRODUCT_SUCCESS"
export const FETCH_PRODUCT_FAILURE: ProductFetchTypes = "FETCH_PRODUCT_FAILURE"