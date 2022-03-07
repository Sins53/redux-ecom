import { DECREASE_ORDER, INCREASE_ORDER, INITIAL_VALUES, ORDERED_VALUE, RESET_ORDER } from "../contants";

export const fetchorder = (value) => (dispatch) =>{
  dispatch({
    type : ORDERED_VALUE,
    payload : value,
  })
}

export const initializeValues = (id) => {
  var arr = []
  for(var i=1; i<= id ; i++){
    arr[i] = 1;
  }
  return {
    type: INITIAL_VALUES,
    payload: arr,
  };
  /* return {
    type : INITIAL_VALUES,
    payload : id
  }; */
};

export const increment = (id) => {
  return {
    type: INCREASE_ORDER,
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: DECREASE_ORDER,
    payload: id,
  };
};

export const resetOrder = (id) => {
  return {
    type : RESET_ORDER,
    payload :id
  }
}
