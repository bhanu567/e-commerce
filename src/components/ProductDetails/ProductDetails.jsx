import React from "react";
import { useParams } from "react-router-dom";
import musicArr from "../Array/MusicArray";
import merchArr from "../Array/MerchArr";
import Carousal from "./Carousal";

const ProductDetails = () => {
  const Data = [...musicArr, ...merchArr];
  let ind = 0;
  const params = useParams();
  for (let index = 0; index < Data.length; index++) {
    if (Data[index].id == params.productId) {
      ind = index;
    }
  }
  return (
    <>
      <Carousal data={Data[ind]}></Carousal>
      <h1>Reviews</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam et
        harum deserunt, aliquid numquam natus excepturi reprehenderit dolores,
        consequatur nesciunt quam placeat inventore deleniti recusandae unde
        modi est obcaecati nostrum? Exercitationem sed sapiente nam? Repellat
        modi dicta amet deleniti.
      </p>
    </>
  );
};

export default ProductDetails;
