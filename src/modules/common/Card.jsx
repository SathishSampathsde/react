import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, description, price,id }) {
  return (
    <div class="card">
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        {price && <p class="card-text">Price: {price}</p>}
        <div className="d-grid">
          <Link to={`/product/${title}/${id}`} class="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
