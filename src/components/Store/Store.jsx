import React from "react";
import MyCardComponent from "./MyCardComponent";
import tShirt from "../../Images/Shirt.png";
import coffee from "../../Images/Coffee.jpg";
import { Button, Card } from "react-bootstrap";

const musicArr = [
  {
    title: "Colors",
    mainTitle: "Album 1",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    mainTitle: "Album 2",
    price: 14.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    mainTitle: "Album 3",
    price: 9.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    mainTitle: "Album 4",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const merchArr = [
  {
    title: "Colors",
    mainTitle: "T-Shirt",
    price: 19.99,
    imageUrl: tShirt,
  },
  {
    title: "Blue Color",
    mainTitle: "Coffee Cup",
    price: 6.99,
    imageUrl: coffee,
  },
];

function Store() {
  return (
    <>
      <MyCardComponent products={musicArr} title={"MUSIC"}></MyCardComponent>
      <MyCardComponent products={merchArr} title={"MERCH"}></MyCardComponent>
      <Card className="my-5 text-center border-0">
        <Card.Body>
          <Button
            style={{ backgroundColor: "#777", padding: "10px" }}
            className="fw-bold text-info"
          >
            See the Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Store;
