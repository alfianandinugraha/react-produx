import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import {  Product, ProductAction, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from './productTypes';

export function updateProductRequest(product: Product): ProductAction {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload: [product]
  }
}

export function updateProductSuccess(product: Product): ProductAction {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: [product]
  }
}

export function updateProductFailure(error: string): ProductAction {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: [],
    message: error
  }
}

function* updateProduct(action: ProductAction) {
  const { payload } = action
  const [product] = payload
  const {id} = product

  try {
    yield Axios.put(`http://localhost:5500/products/${id}`, product)
    yield put(updateProductSuccess(product))
  } catch (e) {
    yield put(updateProductFailure(e.message))
  }
}

export function* watchUpdateProduct() {
  yield takeEvery(UPDATE_PRODUCT_REQUEST, updateProduct)
}