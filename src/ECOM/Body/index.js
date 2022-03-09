import React, { useEffect } from "react";
import BodyList from "./BodyList";
import BodyTitle from "./BodyTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/products";
// import { cartFilterData } from "../../redux/actions/cart";
// import { initializeValues } from "../../redux/actions/adder";

const Body = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    console.log('inside use effect body')
    // dispatch(initializeValues(20))
  });

  
 

  return (
    <>
      <div className="container mt-5">
        <BodyTitle />
        <BodyList />
      </div>
    </>
  );
};

export default Body;
