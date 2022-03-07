import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {increment, decrement, initializeValues } from '../redux/actions/adder'
import {GrSubtractCircle , GrAddCircle} from 'react-icons/gr'
import { cartAdderDecrease, cartAdderIncrease, removeItem } from '../redux/actions/cart';

const Adder = (props) => {
  const {id, stock, ordered} = props
  // const [disable, setDisable] = useState(false);
  // const cart = useSelector((state) => state.cart.cart);

  const orderValue = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!ordered){
      dispatch(initializeValues(id))
    }
  }, [])

  const decreaseOrder = () => {
    /* orderValue[id] === 1 ?
    setDisable(true) :
    dispatch(decrement(id)) */
    if (orderValue[id] > 1) {
      dispatch(decrement(id))
    // ordered ? dispatch(cartAdderDecrease(id) ? ordered === 1 ? dispatch(removeItem(id)) : null
      if (ordered) {
        dispatch(cartAdderDecrease(id)) 
      }
    } else {
      if (ordered) {
        dispatch(removeItem(id))
      }
    }
    
  }
  const increaseOrder = () => {
    /* orderValue[id] === stock ?
    setDisable(true) :
    dispatch(increment(id)) */
    
    // orderValue[id] < stock ? dispatch(increment(id)) : ordered ? dispatch(cartAdderIncrease(id)) : null

    if (orderValue[id] < stock) {
      dispatch(increment(id))
      if (ordered) {
        dispatch(cartAdderIncrease(id))  
      }
    }
  }

  return (
    <div className="AdderCart">
      <button onClick={decreaseOrder}><GrSubtractCircle /> </button>
      <input className='text-center' type={'number'} defaultValue={orderValue[id]} readOnly />
      <button onClick={increaseOrder}><GrAddCircle /> </button>
    </div>
  )
}

export default Adder