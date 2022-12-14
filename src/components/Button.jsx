import React from "react";

function Button({ text, width, height, textSize, margin, func }) {
  return (
    <button
      className={`w-${width} h-${height} text-${textSize} m-${margin} text-white cursor-pointer button-gradient hover:bg-purple-800 flex items-center justify-center rounded-full shadow-xl`}
      onClick={func}
    >
      {text}
    </button>
  );
}

export default Button;
