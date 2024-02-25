import React from "react";

const cartElements = [
  {
    title: "Colors",
    mainTitle: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    mainTitle: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    mainTitle: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const CartContent = () => {
  return (
    <>
      {cartElements.map((cartElement) => (
        <>
          <div className="row justify-content-center m-2">
            <div className="col-md-4 text-center">
              <div className="row">
                <div className="col p-1"><img className="img-thumbnail border-0 p-0" src={cartElement.imageUrl} alt="" /></div>
                <div className="col" style={{margin:"auto 0px"}}>{cartElement.mainTitle}</div>
              </div>
            </div>
            <div className="col-md-2 text-center " style={{margin:"auto 0px"}}>{cartElement.price}</div>
            <div className="col-md-4 text-center ">
              <div className="row">
                <div className="col-md-3 border border-info text-center" style={{margin:"auto 0px"}}>
                  {cartElement.quantity}
                </div>
                <div className="col" style={{margin:"auto 0px"}}>
                  <button type="button" class="btn btn-danger">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 border border-bottom border-dark "></div>
            <div className="col-md-2 border border-bottom border-dark "></div>
            <div className="col-md-4 border border-bottom border-dark "></div>
          </div>
        </>
      ))}
    </>
  );
};

export default CartContent;
