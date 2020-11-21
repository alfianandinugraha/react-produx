import { applyMiddleware, createStore } from 'redux';
import { productReducer } from './product/productReducer';
import createSagaMiddleware from 'redux-saga'
import { productRootSaga } from './product/productSagas';

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(productReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(productRootSaga)

export { Store }