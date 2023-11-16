import React, { Fragment, useEffect, useState } from "react";
import Card from "../../modules/common/Card";
import { Link } from "react-router-dom";

function Product() {
  
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setProducts(data);
  }

  return (
    <Fragment>
      <div className="text-center mt-2">
        <Link className="btn btn-primary" to="new">Add Product</Link>
      </div>
      <div className="row row-cols-2 row-cols-4 g-1 mt-2">
        {products &&
          products.map((product, i) => {
            return (
              <div className="col" key={i}>
                <Card
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.images[0]}
                  id={product.id}
                />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}

export default Product;
