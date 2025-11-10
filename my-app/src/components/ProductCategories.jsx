import React from "react";
import ProductCard from "./ProductCard";
import UseCategories from "../cointainers/UseCategories";

function ProductCategories() {
    const { loading, products, selectedCategory, setSelectedCategory, categories } = UseCategories()
    return (
        <div className="categories-page">
            <h1>Categories</h1>
            <p>Select a category to view its products</p>
            <div className="categories-tabs"
                style={{
                    display: "flex", flexWrap: "wrap",  gap: "10px",  marginBottom: "20px",}}  >

                <button  onClick={() => setSelectedCategory("all")}   className={`btn ${selectedCategory === "all"  ? "btn-primary": "btn-outline-primary" }`}> ALL</button>


                {categories.map((cat) => (
                    <button
                        key={cat.slug || cat}
                        onClick={() => setSelectedCategory(cat.slug || cat)}
                        className={`category-btn ${selectedCategory === (cat.slug || cat) ? "active" : ""
                            }`}
                    >
                        {(cat.name || cat).toUpperCase()}
                    </button>

                ))}
            </div>

            {loading && <h4>Loading products...</h4>}

            {!loading && products.length > 0 && (
                <div
                    className="product-container"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        justifyContent: "center",
                    }}
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            {!loading && products.length === 0 && (
                <h4>No products found for this category.</h4>
            )}
        </div>
    );
}

export default ProductCategories;
