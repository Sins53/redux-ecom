import React from "react";

import FilterModal from "../FilterModal";

const BodyTitle = () => {
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-2">
          <h3>Products</h3>
        </div>
        <div className="col-2 text-end">         
          <FilterModal />
        </div>
      </div>
    </>
  );
};

export default BodyTitle;
