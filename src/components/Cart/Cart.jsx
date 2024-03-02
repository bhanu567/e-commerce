import React from "react";
import CartContent from "./CartContent";

const Cart = () => {
  return (
    <div
      style={{
        width: "45vw",
        height: "90vh",
        overflow:"hidden"
      }}
    >
      <div className="modal-body p-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 ms-auto">
            <button type="button" className="form-control border-dark">X</button>
            </div>
          </div>
          <div
            className="row justify-content-center mb-4 fw-bold"
            style={{ fontSize: "28px" }}
          >
            CART
          </div>
          <div className="row justify-content-center fw-bold">
            <div className="col-md-4 text-center ">ITEM</div>
            <div className="col-md-2 text-center ">PRICE</div>
            <div className="col-md-4 text-center ">QUANTITY</div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 border border-bottom border-dark "></div>
            <div className="col-md-2 border border-bottom border-dark "></div>
            <div className="col-md-4 border border-bottom border-dark "></div>
          </div>
          <CartContent></CartContent>
          <div className="row my-4">
            <h4 style={{ textAlignLast: "right", paddingRight: "70px" }}>
              <span className="fw-bold">Total </span>$0.00
            </h4>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-center my-3  ">
        <button
          type="button"
          className="btn btn-secondary bg-info text-light fw-bold"
        >
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Cart;
