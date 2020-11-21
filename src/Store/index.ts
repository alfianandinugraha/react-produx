import { createStore } from 'redux';
import { productReducer } from './product/productReducer';

const Store = createStore(productReducer)

export { Store }