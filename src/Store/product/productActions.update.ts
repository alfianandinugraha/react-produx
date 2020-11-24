import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, Product, ProductAction } from './productTypes';

export function deleteProductRequest(product: Product): ProductAction {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: [product]
  }
}

export function deleteProductSuccess(product: Product): ProductAction {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: [product]
  }
}

export function deleteProductFailure(error: string): ProductAction {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: [],
    message: error
  }
}