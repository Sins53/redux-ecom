import { FILTER_DATA, RESET_FILTER_DATA } from "../contants"

export const setFilterData = (min,max,category) =>{
  var a, b, c = null;
  min ? a = min : a = 1;
  max ? b = max : b = 1000000000; 
  c = Number(category)
  return {
    type : FILTER_DATA,
    payload : {
      a,
      b,
      c
    }
  }
}

export const resetFilterData = () => {
  return {
    type : RESET_FILTER_DATA,
  }
}