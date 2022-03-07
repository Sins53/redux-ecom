import React from 'react'
import {FaFilter} from 'react-icons/fa'
import FilterModal from '../FilterModal'

const BodyTitle = () => {
  return (
    <>
    <div className="row justify-content-between">
      <div className="col-2">
        <h3>Products</h3>
      </div>
      <div className="col-1">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal">
          <FaFilter />
          <h4 className='ms-2' style={{display:'inline'}}>Filter</h4>
        </button>
        <FilterModal />
      </div>
    </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <label >Price</label>
        <div className="row">
          <div className="col"><input type="text" placeholder='Min' /></div>
          <div className="col">-</div>
          <div className="col"><input type="text" placeholder='Min' /></div>
        </div>
        <label> Date</label>
        <div>
          <input type="date" />
        </div>
        <label > Category</label>
        <div>
        <select name="Choose" placeholder="Choose " >
          <option value="1">Choose Categories</option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
        </div>
        
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default BodyTitle