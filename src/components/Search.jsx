import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search w-full mt-4 max-w-3xl mx-auto">
      {" "}
      {/* Reducir mt-10 a mt-4 */}
      <div className="relative flex items-center w-full bg-light-100/5 px-4 py-3 rounded-lg">
        <img
          src="search.svg"
          alt="search"
          className="h-5 w-5 absolute left-3"
        />
        <input
          type="text"
          placeholder="Busca entre miles de peliculas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 py-2 text-base text-gray-200 placeholder-light-200 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
