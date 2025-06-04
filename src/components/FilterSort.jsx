import React, { useState } from "react";

function FilterSort({ sortBy, setSortBy, maxPrice, setMaxPrice }) {
 
  

  return (
    <>
      <div className="mb-3 d-flex justify-content-end">
        <input
          type="range"
          min="0"
          max="200"
          step="20"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <select
          className="form-select w-auto"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price : Low To High</option>
          <option value="highToLow">Price : High To Low</option>
        </select>
      </div>
    </>
  );
}

export default FilterSort;
