import React, { useState } from 'react'
import Navbar from '../Navbar'
import CheckoutCart from './CheckoutCart'
import CheckoutForm from './CheckoutForm'
import CheckoutSuccess from './CheckoutSuccess'


const Checkout = () => {
  const [formSubmit, setFormSubmit] = useState(true) 

  return (
    <>
    <Navbar />
    {formSubmit ? 
    <>
    <h1>Checkout</h1> 
    <div className="container Checkout">
      <div className="row justify-content-between">
        <div className="col-7 Checkout-detail">
        <CheckoutCart />
        </div>
        <div className="col-4 Checkout-cart">
        <CheckoutForm 
        setFormSubmit = {setFormSubmit}
        />
        </div>
      </div>
    </div>
     </> : <CheckoutSuccess
     setFormSubmit = {setFormSubmit}
     />}
  </>
  )
}

export default Checkout






  
  
  