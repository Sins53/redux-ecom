import {
  ADD_CART,
  CART_DECREASE_ORDER,
  CART_INCREASE_ORDER,
  CART_LIST,
  REMOVE_ITEM,
} from "../contants";

export const fetchCart = () => {
  return {
    type: CART_LIST,
  };
};

export const addCart = (cart) => {
  if (cart !== []) {
    return {
      type: ADD_CART,
      payload: cart,
    };
  }
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const cartAdderIncrease = (id) => {
  return {
    type: CART_INCREASE_ORDER,
    payload: id,
  };
};

export const cartAdderDecrease = (id) => {
  return {
    type: CART_DECREASE_ORDER,
    payload: id,
  };
};
