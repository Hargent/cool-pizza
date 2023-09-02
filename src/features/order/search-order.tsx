import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchOrder: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order number"
        value={query}
        onChange={handleChange}
        className="rounded-full px-4 py-2 text-sm 
        placeholder:text-stone-400 w-4/5 bg-yellow-100 
        sm:w-64 sm:focus:w-full transition-all duration-300
        focus:outline-none focus:ring-yellow-500 
         focus:ring opacity-50
        "
      />
    </form>
  );
};

export default SearchOrder;
