import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [id]);

  async function fetchProducts() {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const data = res.data;
    setProduct(data);
  }

  async function deleteProduct(id) {
    try {
      const res = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      if (res.data) {
        alert("Your product was deleted successfully!");
        navigate("/product");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      {product && (
        <div class="card mt-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={product.images[0]}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <p class="card-text">Price: {product.price}</p>
                <div class="d-flex gap-1">
                  <Link
                    className="btn btn-primary"
                    to={`/product/update/${product.id}`}
                  >
                    Update Product Details
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ViewProduct;
