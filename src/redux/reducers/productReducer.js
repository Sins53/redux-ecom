import { PRODUCT_LIST_FETCHING, PRODUCT_LIST_SUCCESS } from "../contants";

const initialState = {
  products: [],
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
