import React from "react";

import Review from "./component/review/Review";
import Product from "./component/product/Product";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Product id={id} />
      <Review />
    </>
  );
};

export default ProductDetails;
