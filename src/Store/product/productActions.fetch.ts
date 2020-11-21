import { 
  FETCH_PRODUCT_REQUEST, 
  FETCH_PRODUCT_SUCCESS, 
  Product, 
  ProductFetchAction
} from './productTypes'

export function fetchProductRequest(): ProductFetchAction {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}

export function fetchProductSuccess(products: Product[]): ProductFetchAction {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    data: products
  }
}

export function fetchProductFailure(error: string): ProductFetchAction {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    error: error
  }
}