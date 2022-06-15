import React, { useState } from "react";
import { useRouter } from "next/router";
const Form = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const formHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/?search=${search}`);
  };
  return (
    <div className="container mt-10 w-full px-5 m-auto">
      <form onSubmit={formHandler}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Images"
          type="text"
          id="search"
          name="search"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
    </div>
  );
};

export default Form;
