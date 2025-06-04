import React from "react";

function SearchBar({searchTerm, setSearchTerm}) {

  return (
    <>
      <div className="mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;
