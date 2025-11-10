import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card" key={product.id} onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: "pointer", width: "250px",  border: "1px solid #ccc", borderRadius: "10px",  padding: "10px",}}>
      <img src={product.thumbnail}  className="card-img-top"alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="product-price">{product.title}</h5>
        <p>{product.category}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
