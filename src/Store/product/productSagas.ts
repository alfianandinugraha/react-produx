import { all } from 'redux-saga/effects'
import { watchFetchProduct } from './productActions.fetch'
import { watchSendProduct } from './productActions.send'

export function* productRootSaga() {
  yield all([watchFetchProduct(), watchSendProduct()])
}