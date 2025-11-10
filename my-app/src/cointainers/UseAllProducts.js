import { useState, useEffect } from "react";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

    useEffect(() => {
    if (search.trim() === "") {
      setSearchFilter([]);
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setSearchFilter(data.products))
      .catch((error) => console.error("Error fetching search:", error));
  }, [search]); 



 
  return { products, searchFilter, search,setSearch };
};

export default useAllProducts;
