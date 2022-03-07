import React, { useEffect } from "react";
import BodyList from "./BodyList";
import BodyTitle from "./BodyTitle";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/actions/products";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
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
