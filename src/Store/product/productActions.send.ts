import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
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
    payload: [product]
  }
}

export function sendProductSuccess(product: Product): ProductAction {
  return {
    type: SEND_PRODUCT_SUCCESS,
    payload: [product]
  }
}

export function sendProductFailure(error: string): ProductAction {
  return {
    type: SEND_PRODUCT_FAILURE,
    payload: [],
    message: error
  }
}

export function* sendProduct(action: ProductAction) {
  try {
    const { payload } = action
    const [data] = payload
    
    yield Axios.post("http://localhost:5500/products", data)
    yield put(sendProductSuccess(data))
  } catch (e) {
    yield put(sendProductFailure(e.message))
  }
}

export function* watchSendProduct() {
  yield takeEvery(SEND_PRODUCT_REQUEST, sendProduct)
}