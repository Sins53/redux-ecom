import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { AiFillCloseCircle } from "react-icons/ai";
import { removeItem } from "../../redux/actions/cart";
import Adder from "../../Components/Adder";
import { resetOrder } from "../../redux/actions/adder";

var stockName = "";

const CheckoutCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  const removeCart = (id) => {
    dispatch(removeItem(id));
    dispatch(resetOrder(id));
  };

  if (cart !== []) {
    var total = 0;
    var uniqueItems = 0;
    if (cart !== []) {
      cart.forEach((item) => {
        uniqueItems += item.ordered;
        total = total + item.r * item.ordered;
      });
    }
  }

  return (
    <>
      <h2 className="mt-5">Ordered Summary</h2>
      <div className="container mt-5 mb-5">
        {cart.map((item) => {
          {
            item.ordered <= 0
              ? removeCart(item.id)
              : item.stock < 5
              ? (stockName = "danger")
              : item.stock < 10
              ? (stockName = "ok")
              : (stockName = "full");
          }
          return (
            <>
              <div className="row mt-3" key={item.name + item.id}>
                <div className="col-2 ">
                  <img className="Cart-img" src={imgUrl + item.image} alt="" />
                </div>
                <div className="col-4 ">
                  <h4>Name: {item.name}</h4>
                  <h4>Unit Price: Rs. {item.r}</h4>
                  <h4>Order Qty: {item.ordered}</h4>
                </div>
                <div className="col-3 text-center align-self-center ">
                  <h5 className={`ListCard-${stockName}`}>
                    {"Stock remaining: " + item.stock}
                  </h5>
                  <Adder
                    id={item.id}
                    stock={item.stock}
                    ordered={item.ordered}
                  />
                </div>
                <div className="col-3 align-self-center text-center">
                  <h5>SubTotal: Rs. {item.r * item.ordered}</h5>
                  <button className="btn Checkout-cart-btn" onClick={() => removeCart(item.id)}>
                    <h5>Remove</h5>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="text-end Checkout-cart-end">
        <h2>Unique Items : {uniqueItems}</h2>
        <h2>Total Amount : {total}</h2>
      </div>
    </>
  );
};

export default CheckoutCart;
