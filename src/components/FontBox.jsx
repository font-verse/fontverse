import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsDownload, BsTypeBold, BsTypeItalic } from "react-icons/bs";
function FontBox({ fontFamily, fontWeight, fontUrl }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="flex flex-col my-12 px-3 h-auto md:w-4/5 rounded-2xl box-shadow">
      <div className=" py-5 flex items-center justify-center">
        <span className="text-light text-xl">{fontFamily}</span>
      </div>
      {/* <hr />   */}
      <Link to={`/font/${fontFamily}`}>
        <div className="flex text-center items-center justify-center py-10 border border-highlight rounded-2xl shadow-xl">
          <span
            style={{ fontFamily: fontFamily, fontWeight: fontWeight }}
            className="text-light text-5xl md:text-6xl"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </span>
        </div>
      </Link>
      {/* <hr /> */}
      <div className="flex justify-between p-5">
        <div className="">
          <div className="flex">
            <button className="flex justify-center items-center w-20 h-10 mr-5 border border-light rounded-full">
              <BsTypeBold fontSize={25} className="text-light" />
            </button>
            <button className="flex justify-center items-center w-20 h-10 border border-light rounded-full">
              <BsTypeItalic fontSize={25} className="text-light" />
            </button>
            {/* <BsTypeItalic className="text-light w-16 h-4 border border-light" /> */}
          </div>
        </div>
        <div className="flex items-center">
          {/* favorite */}
          {favorite ? (
            <MdFavorite
              fontSize={40}
              className="text-highlight cursor-pointer"
              onClick={() => setFavorite(!favorite)}
            />
          ) : (
            <MdFavoriteBorder
              fontSize={40}
              className="text-light cursor-pointer hover:text-highlight"
              onClick={() => setFavorite(!favorite)}
            />
          )}
          <a href={fontUrl}>
            <BsDownload
              fontSize={40}
              className=" ml-4 text-light cursor-pointer hover:text-highlight"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FontBox;
