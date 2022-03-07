import React from "react";
import { useSelector } from "react-redux";
import ListCard from "../../Components/ListCard";

const BodyList = (props) => {
  const isLoading = useSelector((state) => state.product.isLoading);

  //console.log(isLoading, "<<<<<-----props");

  return <>{isLoading ? <h1>Loading..... </h1> : <ListCard />}</>;
};

export default BodyList;
