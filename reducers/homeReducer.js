import { createHeader } from "../util/util";
import { API_BASE_URL, API_KEY } from "@env";

export const ACTION_TYPES = {
  LOAD_HOME_REQUEST: "home/LOAD_HOME_REQUEST",
  LOAD_HOME_SUCCESS: "home/LOAD_HOME_SUCCESS",
  LOAD_HOME_ERROR: "home/LOAD_HOME_ERROR"
};

const initialState = {
  specials: [],
  error: null,
  loading: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_HOME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.LOAD_HOME_SUCCESS:
      return {
        ...state,
        specials: action.payload,
        loading: false
      };
    case ACTION_TYPES.LOAD_HOME_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const loadSpecialOffer = (offset) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOAD_HOME_REQUEST
  });
  let url = "";
  url +=
    API_BASE_URL +
    "/lists/overview.json?api-key=" +
    API_KEY +
    "&offset=" +
    offset;
  const headers = createHeader();
  return fetch(url, {
    method: "GET",
    headers,
    body: null
  })
    .then((response) => response.json())
    .then((json_res) => {
      dispatch({
        type: ACTION_TYPES.LOAD_HOME_SUCCESS,
        payload: json_res.results.lists[0].books
      });
    })
    .catch((e) => {
      dispatch({
        type: ACTION_TYPES.LOAD_HOME_ERROR,
        payload: e
      });
    });
};

export default homeReducer;
