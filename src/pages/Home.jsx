import React, { useState } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { ProductData } from "../data/ProductData";
import FilterSort from "../components/FilterSort";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [maxPrice, setMaxPrice] = useState(200);

  let products = [...ProductData];

  if (searchTerm) {
    products = products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  products = products.filter((p) => p.price <= maxPrice);

  if (sortBy === "lowToHigh") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === "highToLow") {
    products.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="container text-bg-dark py-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterSort
          sortBy={sortBy}
          setSortBy={setSortBy}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <ProductList products={products} />
      </div>
    </>
  );
}

export default Home;
