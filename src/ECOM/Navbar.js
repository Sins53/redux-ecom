import React from 'react'
import {BsCart3} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../Components/Cart'
import { initializeValues } from '../redux/actions/adder';
import { addCart } from '../redux/actions/cart';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch =useDispatch();

  const resetCart = () => {
    dispatch(addCart([]))
    dispatch(initializeValues(20))
  }

  if(cart !== []) {
    var total = 0;
    var uniqueItems = 0;
    if(cart !== []) {
      cart.forEach(item => {
        uniqueItems += item.ordered
        total = total + (item.r * item.ordered)
      });
    }
  }
  
  return (
    <>
    <div className="container-fluid Navbar justify-content-between">
      <div className="row">
        <div className="col">
          <h2 className='Navbar-title'>SHOPMANDU</h2>
        </div>
        <div className="col text-end Navbar-links">
          <h2 >Home</h2>
          <button className='btn' data-bs-toggle="modal" data-bs-target="#cartModal">
            <BsCart3 />
          </button>
          <h2>{cartCount}</h2>
        </div>
        <div className="col-auto text-end">
        <h2>user</h2>
        </div>
      </div>   
    </div>

    <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <div>
        <h4 className="modal-title" id="cartModalLabel">Unique Items : {cartCount} </h4>
        <h4>Total items : {uniqueItems} </h4>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Cart />
      </div>
      <div className="modal-footer">
        <div className='text-end'>
         <h2>Total Amount : {total} </h2>
         <button type="button" className="btn btn-danger" onClick={resetCart}>Reset</button>
         <span>  </span>
         <button type="button" className="btn btn-success">Checkout</button>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Navbar