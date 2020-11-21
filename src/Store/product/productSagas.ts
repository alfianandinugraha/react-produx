import { all } from 'redux-saga/effects'
import { watchFetchProduct } from './productActions.fetch'

export function* productRootSaga() {
  yield all([watchFetchProduct()])
}