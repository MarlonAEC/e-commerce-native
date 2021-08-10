export const ACTION_TYPES = {
  LOAD_PRODUCT_REQUEST: 'product/LOAD_PRODUCT_REQUEST',
  LOAD_PRODUCT_SUCCESS: 'product/LOAD_PRODUCT_SUCCESS',
  LOAD_PRODUCT_ERROR: 'product/LOAD_PRODUCT_ERROR',
};

const initialState = {
    products: [],
    error: null,
    loading: false   
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_PRODUCTS_REQUEST:
      return {
          ...state,
          loading: true
      }
    case ACTION_TYPES.LOAD_PRODUCTS_SUCCESS:
      return {
          ...state,
          products: action.payload,
          loading: false
      }
    case ACTION_TYPES.LOAD_PRODUCTS_ERROR:
        return {
            ...state,
            error: action.payload,
            loading: false
        }
  }
  return state
}

export default productReducer