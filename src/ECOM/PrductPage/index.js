import React from "react";
import { useSelector } from "react-redux";
import Adder from "../../Components/Adder";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import ListCard from "../../Components/ListCard";

const ProductPage = () => {
  const { id } = useParams();
  
  const productList = useSelector((state) => state.product.products);

  var id1 = Number(id)
  var category = '';

  var arr = productList.filter(checkFilter);
  var arr1 = productList.filter(categoryFilter);
  var arrReduced = arr1.slice(0, 4);

  function checkFilter(item) {
    if (item.id === id1) {
      category = item.category[1]
      return item;
    }
  }
  function categoryFilter(item) {
    if (item.id !== id1 && item.category[1] === category) {
      return item;
    }
  }

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
                <div className="mt-5">
                  <h2>Similar Items:</h2>
                  <ListCard 
                  arrReduced = {arrReduced}
                  />
                </div>
              </>
            );
        })}
        <br/> <br/> <br/> <br/>
      </div>
      
    </>
  );
};

export default ProductPage;
