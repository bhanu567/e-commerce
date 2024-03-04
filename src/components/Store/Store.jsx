import React from "react";
import MyCardComponent from "./MyCardComponent";
import { Button, Card} from "react-bootstrap";
import musicArr from "../Array/MusicArray";
import merchArr from "../Array/MerchArr";


function Store() {
  console.log(window.location.pathname);
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
