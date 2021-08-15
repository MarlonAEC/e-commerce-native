import { API_BASE_URL, API_KEY } from "@env";
import { createHeader } from "../util/util";

export const ACTION_TYPES = {
  LOAD_PRODUCT_REQUEST: "product/LOAD_PRODUCT_REQUEST",
  LOAD_PRODUCT_SUCCESS: "product/LOAD_PRODUCT_SUCCESS",
  LOAD_PRODUCT_ERROR: "product/LOAD_PRODUCT_ERROR"
};

const initialState = {
  products: [],
  error: null,
  loading: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.LOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case ACTION_TYPES.LOAD_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
  }
  return state;
};

export const getProducts = (date, filter) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOAD_PRODUCT_REQUEST
  });
  let url = "";
  url +=
    API_BASE_URL + "/lists/" + date + "/" + filter + ".json?api-key=" + API_KEY;
  const headers = createHeader();
  return fetch(url, {
    method: "GET",
    headers,
    body: null
  })
    .then((response) => response.json())
    .then((json_res) => {
      let books = json_res.results.books.map((item) => {
        let price = (Math.random() * (100 - 50) + 50).toFixed(2);
        item.price = price;
        return item;
      });
      dispatch({
        type: ACTION_TYPES.LOAD_PRODUCT_SUCCESS,
        payload: books
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTION_TYPES.LOAD_PRODUCT_ERROR,
        payload: error
      });
    });
};

export default productReducer;
