import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  ProductAction,
  ProductStore,
  SEND_PRODUCT_REQUEST
} from './productTypes';

const defaultProductStore: ProductStore = {
  data: [],
  isLoading: true,
  error: ''
}

export const productReducer = (
  store: ProductStore = defaultProductStore,
  action: ProductAction
): ProductStore => {
  const { type } = action

  switch (type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...store,
        isLoading: true
      }
    case FETCH_PRODUCT_SUCCESS: 
      return {
        ...store,
        isLoading: false,
        data: action.payload
      }
    case FETCH_PRODUCT_FAILURE: 
      return {
        ...store,
        isLoading: false,
        error: action.message
      }
    case SEND_PRODUCT_REQUEST:
      return {
        ...store,
        isLoading: true
      }
    default:
      return store
  }
}