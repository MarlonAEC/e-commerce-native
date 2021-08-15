export const ACTION_TYPES = {
  LOAD_CART_ADD: "cart/LOAD_CART_ADD",
  LOAD_CART_SUCCESS: "cart/LOAD_CART_SUCCESS",
  LOAD_CART_REQUEST: "cart/LOAD_CART_LOADING",
  LOAD_CART_ERROR: "cart/LOAD_CART_ERROR",
  ADD_TO_CART_SUCCESS: "cart/ADD_TO_CART_SUCCESS",
  REMOVE_FROM_CART_SUCCESS: "cart/REMOVE_FROM_CART_SUCCESS"
};

const initialState = {
  cart: [],
  error: null,
  loading: false,
  addSuccess: false,
  removeSuccess: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_CART_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.LOAD_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        loading: false
      };
    case ACTION_TYPES.LOAD_CART_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ACTION_TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        addSuccess: true
      };
    case ACTION_TYPES.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        removeSuccess: action.payload
      };
    default:
      return state;
  }
};

export const addProductToCart = (product) => (dispatch, getState) => {
  const state = getState();
  const index = state.cart.cart.findIndex((item) => {
    return item.book.title === product.book.title;
  });
  let amount = 0,
    newCart = null;
  if (index !== -1) {
    newCart = [...state.cart.cart];
    newCart[index].amount = newCart[index].amount + parseInt(product.amount);
  } else {
    newCart = [
      ...state.cart.cart,
      { book: product.book, amount: amount + parseInt(product.amount) }
    ];
  }

  dispatch({
    type: ACTION_TYPES.LOAD_CART_SUCCESS,
    payload: newCart
  });
  dispatch({
    type: ACTION_TYPES.ADD_TO_CART_SUCCESS
  });
};

export const deleteProductFromCart = (title) => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: ACTION_TYPES.REMOVE_FROM_CART_SUCCESS,
    payload: true
  });
  dispatch({
    type: ACTION_TYPES.LOAD_CART_SUCCESS,
    payload: state.cart.cart.filter((item) => {
      return item.book.title !== title;
    })
  });
};

export const updateRemoveStatus = (value) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.REMOVE_FROM_CART_SUCCESS,
    payload: value
  });
};

export default cartReducer;
