import { 
  Product, 
  ProductAction, 
  SEND_PRODUCT_FAILURE, 
  SEND_PRODUCT_REQUEST, 
  SEND_PRODUCT_SUCCESS
} from './productTypes';

export function sendProductRequest(product: Product): ProductAction {
  return {
    type: SEND_PRODUCT_REQUEST,
    data: [product]
  }
}

export function sendProductSuccess(product: Product): ProductAction {
  return {
    type: SEND_PRODUCT_SUCCESS,
    data: [product]
  }
}

export function sendProductFailure(error: string): ProductAction {
  return {
    type: SEND_PRODUCT_FAILURE,
    error: error
  }
}