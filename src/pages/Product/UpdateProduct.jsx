import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import axios from "axios";

function UpdateProduct() {

  const { id } = useParams();

  async function updateProduct(productData) {
    try {
      const res = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        productData
      );
      return res.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return <ProductForm handleFormSubmit={updateProduct} />;
}

export default UpdateProduct;
