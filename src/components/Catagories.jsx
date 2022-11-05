import "../App.css";
import FontBox from "./FontBox";
import { Link } from "react-router-dom";

function CatagoryButton({ text, link, styles, active = false }) {
  return (
    <Link to={link}>
      <button
        className={`w-32 h-14 text-highlight border-2 border-highlight m-2 rounded-full hover:bg-highlight hover:text-light ${
          active && "bg-highlight text-light"
        } ${styles}`}
      >
        {text}
      </button>
    </Link>
  );
}

function Catagories({ fontslist }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-light text-5xl font-[Mattone]">Catagories</h1>
      <div className=" my-12">
        <div className="flex items-center justify-center flex-wrap">
          <CatagoryButton text="All fonts" link="/" styles="flex-1" active />
          <CatagoryButton text="All fonts" link="/" styles="flex-[2]" />
          <CatagoryButton text="All fonts" link="/" styles="flex-1" />
          <CatagoryButton text="All fonts" link="/" styles="flex-1" />
          <CatagoryButton text="All fonts" link="/" styles="flex-1" />
          <CatagoryButton text="All fonts" link="/" styles="flex-1" />
          <CatagoryButton text="All fonts" link="/" styles="flex-1" />
        </div>
      </div>
      <div className="catagories-fonts flex flex-col items-center justify-center">
        {fontslist.map((font, index) => {
          return (
            <FontBox
              key={index}
              fontFamily={font.fontName}
              fontWeight={font.fontWeight}
              fontUrl={font.fontUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Catagories;
