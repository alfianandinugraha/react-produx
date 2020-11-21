import Axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { 
  FETCH_PRODUCT_FAILURE,
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
    type: FETCH_PRODUCT_FAILURE,
    error: error
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