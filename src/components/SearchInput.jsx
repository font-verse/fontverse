import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchInput({ setFontName }) {
  return (
    <div className=" w-3/4 my-10 flex justify-between h-16 border-2 border-slate-700 rounded-full overflow-hidden box-shadow">
      <input
        type="text"
        className="w-full bg-dark-200 text-xl text-light px-6 focus:outline-none"
        placeholder="Search"
        onChange={(e) => {
          setFontName(e.target.value);
        }}
      />
      <button className="flex items-center justify-center w-[5rem] h-15  bg-highlight focus:outline-none rounded-l-full rounded-r-none">
        <FiSearch fontSize={25} />
      </button>
    </div>
  );
}

export default SearchInput;
