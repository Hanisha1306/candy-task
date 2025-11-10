import { useState, useEffect } from "react";

const UseCategories = () => {
  
 const [categories, setCategories] = useState([]);
     const [selectedCategory, setSelectedCategory] = useState("all");
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(false);

        useEffect(() => {
            fetch("https://dummyjson.com/products/categories")
                .then((res) => res.json())
                .then((data) => { setCategories(data);  })
                .catch((error) => console.error("Error fetching categories:", error));
        }, []);

           
    useEffect(() => {
        setLoading(true);
        const url =
            selectedCategory === "all"
                ? "https://dummyjson.com/products"
                : `https://dummyjson.com/products/category/${selectedCategory}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((error) => console.error("Error fetching products:", error))
            .finally(() => setLoading(false));
    }, [selectedCategory]);
    
    return { loading,products,selectedCategory,setSelectedCategory,categories }
}
 
export default UseCategories;
