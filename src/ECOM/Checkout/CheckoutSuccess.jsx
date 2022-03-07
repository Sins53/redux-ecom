import React from 'react'

const CheckoutPayment = (props) => {
  const { setFormSubmit} = props
  const submitSuccess = () => {
    setFormSubmit(true)
  }
  return (
    <>
    <div class="text-center">
  <div className='cart-success'>
    <div style={{fontSize:'5rem'}}>
      ✔
        </div>
        <h1>
      Success
        </h1>
    </div>
  <p>
    Check your email for the Order confirmation. We'll see you soon!
  </p>
  <button className="btn btn-primary" onClick={() => submitSuccess()}> Close</button>
</div>
    </>
  )
}

export default CheckoutPayment