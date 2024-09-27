import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge text-bg-secondary">₹{props.product.price}</span> {/* Fixed className */}
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group" // Fixed className
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger"> 
            -
          </button>
          <button type="button" className="btn btn-warning"> 
            {props.product.quantity} {/* Corrected prop access */}
          </button>
          <button type="button" className="btn btn-success"> 
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity*props.product.price}
      </div>
    </div>
  );
}
