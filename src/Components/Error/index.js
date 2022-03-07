import React from "react";

const Validation = (props) => {
  const { errors, name } = props;
  return <>{errors && errors[name] && <small className="text-danger m-1" style={{display:'block'}}>{errors[name]}</small>}</>;
};

export default Validation;
