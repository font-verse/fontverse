import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "../axios/axios";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { FontContext } from "../context/FontContext";
import Message from "../components/Message";

const FontPreview = ({ fontFamily, fontWeight, addToCollection }) => {
  return (
    <div className="w-3/4 h-auto max-w-[1024px] m-5 p-5 bg-dark-200 rounded-lg box-shadow">
      <div className="flex">
        <p className=" text-lg text-highlight">{fontWeight}</p>
      </div>
      <div className="flex justify-between items-center my-5 overflow-hidden">
        <div className="">
          <span
            style={{ fontFamily: fontFamily, fontWeight: fontWeight }}
            className="text-light text-5xl text-center focus:outline-none overflow-hidden"
            contentEditable={true}
            spellCheck={false}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </span>
        </div>
        {/* <div className="h-full flex flex-1 items-center justify-end">
          <AiOutlinePlus
            className="text-light text-5xl cursor-pointer hover:text-highlight"
            onClick={() => {
              addToCollection(fontFamily);
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

function Font() {
  const { addToCollection } = useContext(FontContext);
  const fontName = useParams().fontName;
  const [added, setAdded] = useState(false);

  const [fonts, setFonts] = useState([]);

  const getFont = async () => {
    await axios
      .get(
        `https://api-fontverse.herokuapp.com/api/font/getfont?fontName=${fontName}`
      )
      .then((res) => {
        setFonts(res.data.data);
      });
  };

  useEffect(() => {
    getFont();
  }, []);

  return (
    <div className="py-14 flex flex-col items-center justify-center">
      {/* Font Title */}
      <div className="my-7 flex items-center justify-between w-3/4">
        <h1 className="text-light md:text-5xl text-3xl">{fontName}</h1>
        <AiOutlinePlus
          className="text-light md:text-5xl text-3xl cursor-pointer hover:text-highlight"
          onClick={() => {
            setAdded(true);
            addToCollection(fontName);
          }}
        />
      </div>

      {/* Font Varients */}
      {fonts.map((font) => (
        <FontPreview
          fontFamily={font.fontName}
          fontWeight={font.fontWeight}
          addToCollection={addToCollection}
          key={font.fontWeight}
        />
      ))}

      {added && <Message message="Font added" state={false} />}
    </div>
  );
}

export default Font;
