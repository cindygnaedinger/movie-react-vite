import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div
      className="search w-full max-w-3xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{ top: "calc(50% + 150px)" }}
    >
      {/* Añadido: position absolute, centrado con transform y z-index */}
      <div className="relative flex items-center w-full bg-light-100/5 px-4 py-3 rounded-lg">
        <img
          src="search.svg"
          alt="search"
          className="h-5 w-5 absolute left-3"
        />
        <input
          type="text"
          placeholder="Descubre nuestro catálogo."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 py-2 text-base text-gray-200 placeholder-light-200 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
