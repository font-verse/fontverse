import React from "react";

function Input({ type, placeholder, setInput }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-[20rem] h-14 px-4 my-2 text- bg-dark-200 border-2 border-slate-700 rounded-lg focus:outline-none"
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default Input;
