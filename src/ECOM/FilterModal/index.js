import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterData, setFilterData } from "../../redux/actions/filter";
import { FaFilter } from "react-icons/fa";
// import FilteredPage from "../../Components/Extra/FilteredPage";

const FilterModal = () => {
  const [displayModal, setDisplayModal] = useState("none");
  // var modal = document.getElementById("myModal");
  const productList = useSelector((state) => state.product.products);
  // console.log(productList)
  const modal = useRef(null);
  const min = useRef(null);
  const max = useRef(null);
  const category = useRef(null);

  const dispatch = useDispatch();

  const unique = [...new Set(productList.map((item) => item.category[1]))];

  const display = () => {
    setDisplayModal("block");
  };
  const close = () => {
    setDisplayModal("none");
  };
  window.onclick = function (event) {
    if (event.target === modal.current) {
      setDisplayModal("none");
    }
  };
  const setFilter = () => {
    // console.log(modal.current)
    var fmin = min.current.value;
    var fmax = max.current.value;
    var fc = category.current.value;
    // console.log(fc, '--------here')
    // console.log(typeof(fc) , 'here now')
    dispatch(setFilterData(fmin, fmax, fc));
  };
  const resetFilter = () => {
    dispatch(resetFilterData());
    min.current.value = '';
    max.current.value = '';
    category.current.value = 0;
  };
  return (
    <>
      <button className="btn btn-primary" onClick={display} >
            <FaFilter />
            <h4 className="Filter-btn" style={{ display: "inline" }}>
              Filter
            </h4>
          </button>

      {/* <FilteredPage /> */}
      <div
        ref={modal}
        id="myModal"
        className="Custom-modal text-start"
        style={{ display: displayModal }}
      >
        <div className="Custom-modal-content">
          <div className="modal-header Custom-modal-header">
            <div>
              <h3 className="modal-title" id="cartModalLabel">
                Filter
              </h3>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <label>Price</label>
              <div className="row">
                <div className="col">
                  <input ref={min} type="number" placeholder="Min" />
                </div>
                {/* <div className="col">-</div> */}
                <div className="col">
                  <input ref={max} type="number" placeholder="Max" />
                </div>
              </div>
              <label> Date</label>
              <div>
                <input type="date" />
              </div>
              <label> Category</label>
              <div>
                <select ref={category} name="Choose" placeholder="Choose ">
                  <option value={0} >Display All</option>
                  {unique.map((item) => {
                    return (
                      <option value={unique.indexOf(item) + 1} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={resetFilter}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={setFilter}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
