import Axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { 
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST, 
  FETCH_PRODUCT_SUCCESS, 
  Product,
  ProductAction
} from './productTypes'

export function fetchProductRequest(): ProductAction {
  return {
    type: FETCH_PRODUCT_REQUEST,
    payload: []
  }
}

export function fetchProductSuccess(products: Product[]): ProductAction {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
  }
}

export function fetchProductFailure(error: string): ProductAction {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: [],
    message: error
  }
}

export function* fetchProduct() {
  try {
    const { data } = yield Axios.get("http://localhost:5500/products")
    yield put(fetchProductSuccess(data))
  } catch (error) {
    yield put(fetchProductFailure(error.message))
  }
}

export function* watchFetchProduct() {
  yield takeEvery(FETCH_PRODUCT_REQUEST, fetchProduct)
}