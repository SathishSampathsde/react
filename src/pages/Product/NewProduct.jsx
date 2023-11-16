import React from "react";
import ProductForm from "./ProductForm";
import axios from "axios";

function NewProduct() {
  async function addNewProduct(productData) {
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/products/",
        productData
      );
      return res.status === 201;
    } catch (error) {
      return false;
    }
  }
  return <ProductForm handleFormSubmit={addNewProduct} />;
}

export default NewProduct;
