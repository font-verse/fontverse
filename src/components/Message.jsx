import React from "react";

function Message({ message, state }) {
  return (
    <div
      className={`absolute bg-highlight w-full h-full  ${
        state ? "block" : "hidden"
      }`}
    >
      {message}
    </div>
  );
}

export default Message;
