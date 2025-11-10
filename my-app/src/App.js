import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import ProductCategories from "./components/ProductCategories";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ marginLeft: "220px", padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/categories" element={<ProductCategories />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
