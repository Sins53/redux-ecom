import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Adder from "../../Components/Adder";
import Navbar from "../Navbar";
import { addCart } from "../../redux/actions/cart";
import { useParams } from "react-router-dom";
import ListCard from "../../Components/ListCard";

const ProductPage = () => {
  const { id } = useParams();

  const productList = useSelector((state) => state.product.products);
  const orderValue = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart.cart);

  var id1 = Number(id);

  // console.log(id);

  const dispatch = useDispatch();
  var category = "";

  var imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  var arr = productList.filter(checkFilter);
  var arr1 = productList.filter(categoryFilter);
  var arrReduced = arr1.slice(0, 4);

  function checkFilter(item) {
    if (item.id === id1) {
      category = item.category[1];
      return item;
    }
  }
  function categoryFilter(item) {
    if (item.id !== id1 && item.category[1] === category) {
      return item;
    }
  }

  const toRs = (price) => {
    var rs = price;
    var arrRs = rs.split("$");
    arrRs.shift();
    var r = Number(arrRs[0]);
    r *= 120;
    return r;
  };

  const updateCart = (item) => {
    Object.assign(item, { r: toRs(item.price), ordered: orderValue[item.id] });
    var arr = [];
    cart.forEach((citem) => {
      if (item.id !== citem.id) {
        arr.push(citem);
      }
    });
    var unique = [item, ...arr];
    dispatch(addCart(unique));
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {arr.map((item) => {
          return (
            <>
              <div class="row justify-content-center">
                <div class="col-6">
                  <img className="qwe" src={imgUrl + item.image} alt="" />
                </div>
                <div class="col-4">
                  <div>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <h3>Description :</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit ut blanditiis id laboriosam. Repellat voluptatum a,
                      sed fugiat, nihil perspiciatis, tempora veniam assumenda
                      pariatur unde quidem sit quam quod numquam!
                    </p>
                    <Adder id={item.id} stock={item.stock} />
                    <button
                      className="ListCard-btn mt-4"
                      onClick={() => updateCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2>Similar Items:</h2>
                <ListCard arrReduced={arrReduced} />
              </div>
            </>
          );
        })}
        <br /> <br /> <br /> <br />
      </div>
    </>
  );
};

export default ProductPage;
