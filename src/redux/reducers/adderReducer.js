import {DECREASE_ORDER, INCREASE_ORDER, INITIAL_VALUES, ORDERED_VALUE, RESET_ORDER} from "../contants";

// const initialState = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const adderReducer = (state = [], action) => {
  switch (action.type) {
    case ORDERED_VALUE : 
      return state
    case INITIAL_VALUES:
      // state[action.id] = 1
      state = action.payload
      // console.log(action.payload)
      return {...state};
    case INCREASE_ORDER:
      state[action.payload] += 1
      return {...state};
    case DECREASE_ORDER:
      state[action.payload] -= 1
      return {...state};
    case RESET_ORDER :
      /* console.log(state[action.payload]) 
      var arr = state
      arr[action.payload] = 1
      console.log(arr)
      state = arr */
      state[action.payload] = 1
      return {...state};
    default:
      return state;
  }
};

export default adderReducer;
