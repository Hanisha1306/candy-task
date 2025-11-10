import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function  ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com./products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button className=" btn btn-primar" style={{width:"10%", height:"25%", margin:"25px"}} onClick={() => navigate(-1)}> Back </button>

      <div className="card" key={product.id}  style={{width:"50%", height:"50%", padding:"10px",marginBottom:"20px", borderRadius:"8px",border:"1px solid gray"}}>
        <img src={product.thumbnail}  className="card-img-top img-center" alt={product.title} style={{width:"250px",height:"250px", display:"block",margin:"0 auto", objectFit:"cover" }} />
        <div className="card-body" >
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.category}</p>
          <p className="card-price">${product.price}</p>
          <p className="card-rating"> <span className="fa fa-star checked"></span> {product.rating} </p>
           <div className="card-body">
              <h3>Description</h3>
              <p>{product.description}</p>
           </div>
          <div className="card-body">
              <h3>Product Details </h3>
              <p>brand: {product.brand}</p>
              <p>category:{product.category}</p>
              <p>stock: {product.stock}</p>
              <p>rating: {product.rating}/5</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
