import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initializeValues } from "../../redux/actions/adder";
import { addCart } from "../../redux/actions/cart";

const CheckoutPayment = () => {
  const dispatch = useDispatch();

  const submitSuccess = () => {
    // setFormSubmit(true);
    dispatch(addCart([]));
    dispatch(initializeValues(20));
  };
  return (
    <>
      <div class="text-center">
        <div className="cart-success">
          <div style={{ fontSize: "5rem" }}>✔</div>
          <h1>Success</h1>
        </div>
        <p>Check your email for the Order confirmation. We'll see you soon!</p>
        <Link to="/">
          <button className="btn btn-primary" onClick={() => submitSuccess()}>
            Close
          </button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutPayment;
