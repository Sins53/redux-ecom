import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Adder from "../../Components/Adder";
import Navbar from "../Navbar";
import { addCart } from "../../redux/actions/cart";

const ProductPage = () => {
  const productList = useSelector((state) => state.product.products);
  const orderValue = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart.cart);

  var a = 0;

  const dispatch = useDispatch();
  const id = 6;
  var category = '';

  var imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  var arr = productList.filter(checkFilter);
  var arr1 = productList.filter(categoryFilter);

  function checkFilter(item) {
    if (item.id === id) {
      category = item.category[1]
      return item;
    }
  }
  function categoryFilter(item) {
    if (item.id !== 1 && item.category[1] === category) {
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
  const getDate = (createDate) => {
    var datetime = createDate;
    var date = new Date(datetime);
    var day = date.getDate() + "-";
    var month = date.getMonth() + 1 + "-";
    var year = date.getFullYear();
    var result = day + month + year;
    return result;
  };

  const updateCart = (item) => {
    // console.log(item, '------here----')
    Object.assign(item, { r: toRs(item.price), ordered: orderValue[item.id] });
    var arr = [item, ...cart];
    var unique = [...new Set(arr)];
    dispatch(addCart(unique));
    // setCart(unique);
    // if(reduxCart !==[]){
    //   setCart(reduxCart)
    //   console.log(reduxCart)
    // }
    // console.log(cart)
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
                        Fugit ut blanditiis id laboriosam. Repellat voluptatum
                        a, sed fugiat, nihil perspiciatis, tempora veniam
                        assumenda pariatur unde quidem sit quam quod numquam!
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
                <div>
                  <h2>Similar Items:</h2>
                  <div className="row ">
                    {arr1.map((item) => {
                      a++
                      while (a<5) {
                        return (
                          <div className="col-lg-3 Body-list-card" key={item.id}>
                            <div className="ListCard" id={item.id}>
                              <div className="ListCard-items">
                                <div>
                                  <img
                                    className="ListCard-image"
                                    src={imgUrl + item.image}
                                    alt=""
                                  />
                                </div>
                                <div className="text-end mt-2">
                                  <Adder id={item.id} stock={item.stock} />
                                </div>
                                <div>
                                  <h3>{item.name}</h3>
                                </div>
                                <div>
                                  <div className="row justify-content-between">
                                    <div className="col">
                                      <h4>{`Rs. ${toRs(item.price)}`}</h4>
                                    </div>
                                    <div className="col">
                                      <h5
                                        className={`ListCard-${
                                          item.stock < 5
                                            ? "danger"
                                            : item.stock < 10
                                            ? "ok"
                                            : "full"
                                        } text-end`}
                                      >
                                        {"Stock left: " + item.stock}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4>{`Released on: ${getDate(
                                    item.createDate
                                  )}`}</h4>
                                </div>
                                <div>
                                  <button
                                    className="ListCard-btn"
                                    onClick={() => updateCart(item)}
                                  >
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } 
                      return (<><br /><br /><br /><br /><br /></>)                   
                    })}
                  </div>
                </div>
              </>
            );
        })}
      </div>
      
    </>
  );
};

export default ProductPage;
