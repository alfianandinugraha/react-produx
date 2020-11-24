export type FetchProductTypes =
  "FETCH_PRODUCT_REQUEST" |
  "FETCH_PRODUCT_SUCCESS" |
  "FETCH_PRODUCT_FAILURE"

export type SendProductTypes =
  "SEND_PRODUCT_REQUEST" |
  "SEND_PRODUCT_SUCCESS" |
  "SEND_PRODUCT_FAILURE"

export type DeleteProductTypes =
  "DELETE_PRODUCT_REQUEST" |
  "DELETE_PRODUCT_SUCCESS" |
  "DELETE_PRODUCT_FAILURE"

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

export const SEND_PRODUCT_REQUEST: SendProductTypes = "SEND_PRODUCT_REQUEST"
export const SEND_PRODUCT_SUCCESS: SendProductTypes = "SEND_PRODUCT_SUCCESS"
export const SEND_PRODUCT_FAILURE: SendProductTypes = "SEND_PRODUCT_FAILURE"

export const DELETE_PRODUCT_REQUEST: DeleteProductTypes = "DELETE_PRODUCT_REQUEST"
export const DELETE_PRODUCT_SUCCESS: DeleteProductTypes = "DELETE_PRODUCT_SUCCESS"
export const DELETE_PRODUCT_FAILURE: DeleteProductTypes = "DELETE_PRODUCT_FAILURE"

export interface ProductAction { 
  type: FetchProductTypes | SendProductTypes | DeleteProductTypes,
  payload: Product[],
  message?: string
}

export interface DeleteProductProps {
  deleteProductRequest: (product: Product) => void
}

export interface SendProductProps {
  sendProductRequest: (product: Product) => void
}

export interface ProductProps {
  product: ProductStore,
  fetchProductRequest: () => void,
}