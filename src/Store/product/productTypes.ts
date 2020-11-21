export type ProductFetchTypes =
  "FETCH_PRODUCT_REQUEST" |
  "FETCH_PRODUCT_SUCCESS" |
  "FETCH_PRODUCT_FAILURE"

export type SendProductTypes =
  "SEND_PRODUCT_REQUEST" |
  "SEND_PRODUCT_SUCCESS" |
  "SEND_PRODUCT_FAILURE"

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

export const SEND_PRODUCT_REQUEST: SendProductTypes = "SEND_PRODUCT_REQUEST"
export const SEND_PRODUCT_SUCCESS: SendProductTypes = "SEND_PRODUCT_SUCCESS"
export const SEND_PRODUCT_FAILURE: SendProductTypes = "SEND_PRODUCT_FAILURE"

export interface ProductAction extends ProductStore { 
  type: ProductFetchAction | SendProductTypes
}

export interface ProductProps {
  product: ProductStore,
  fetchProductRequest: () => ProductFetchAction
}