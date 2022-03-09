import {
  CART_LIST,
  ADD_CART,
  REMOVE_ITEM,
  CART_INCREASE_ORDER,
  CART_DECREASE_ORDER,
  CART_FILTER_DUPLICATE,
} from "../contants";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_LIST:
      // console.log(state)
      return {
        ...state,
      };
    case ADD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_ITEM:
      var arr = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: arr,
      };
    case CART_INCREASE_ORDER:
      var arri = state.cart.map((item) => {
        const { id, ordered } = item;
        if (id === action.payload) {
          return { ...item, ordered: ordered + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: arri,
      };
    case CART_DECREASE_ORDER:
      var arrd = state.cart.map((item) => {
        const { id, ordered } = item;
        if (id === action.payload) {
          return { ...item, ordered: ordered - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: arrd,
      };
      case CART_FILTER_DUPLICATE :
        state = action.payload;
        return {...state};
    default:
      return state;
  }
};

export default cartReducer;
