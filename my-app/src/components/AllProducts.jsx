import React from "react";
import useAllProducts from "../cointainers/UseAllProducts";
import ProductCard from "./ProductCard";

function AllProducts() {
  const { products, searchFilter, search, setSearch } = useAllProducts();
  const filteredTerm = search ? searchFilter : products;

  return (
    <div className="App">
      <h1>All Products</h1>
      <p>Browse our complete collection of products</p>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
        style={{
          width: "50%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      />

      <div
        className="product-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredTerm.length > 0 ? (
          filteredTerm.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center text-info">
            <h2>No products found!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
