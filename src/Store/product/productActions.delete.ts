import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, Product, ProductAction } from './productTypes';

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
    type: DELETE_PRODUCT_REQUEST,
    message: error,
    payload: []
  }
}

function* deleteProduct(action: ProductAction) {
  const { payload } = action
  const [product] = payload
  const {id} = product

  try {
    yield Axios.delete(`http://localhost:5500/products/${id}`)
    yield put(deleteProductSuccess(product))
  } catch (e) {
    yield put(deleteProductFailure(e.message))
  }
}

export function* watchDeleteProduct() {
  yield takeEvery(DELETE_PRODUCT_REQUEST, deleteProduct)
}