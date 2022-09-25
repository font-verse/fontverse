import { useState } from "react";
import FontRow from "../components/FontRow";
import { useEffect } from "react";

function MarketPlace() {
  const [fontsList, setFontsList] = useState([
    {
      id: 0,
      fontDisplayName: "Poppins",
      fontName: "Poppins",
      fontLink: "poppinlink",
    },
    {
      id: 1,
      fontDisplayName: "Roboto",
      fontName: "Roboto",
      fontLink: "poppinlink",
    },
    {
      id: 2,
      fontDisplayName: "Montserrat",
      fontName: "Montserrat",
      fontLink: "poppinlink",
    },
    {
      id: 3,
      fontDisplayName: "Luckiest Guy",
      fontName: "Luckiest Guy",
      fontLink: "poppinlink",
    },
    {
      id: 4,
      fontDisplayName: "Sans Serif",
      fontName: "Sans Serif",
      fontLink: "poppinlink",
    },
  ]);

  const [selectedFonts, setSelectedFonts] = useState([]);
  useEffect(() => {
    console.log(selectedFonts);
  }, [selectedFonts]);

  const addFonts = (newFont) => {
    setSelectedFonts((selectedFonts) => [...selectedFonts, newFont]);
  };

  const removeFonts = (removeFont) => {
    setSelectedFonts(selectedFonts.filter(removeFont));
  };

  return (
    <>
      <div className="marketplace__container">
        <div className="marketplace__section">
          <h1>Your Collection</h1>
          <div className="seleted__fonts">
            <div className="selected__fonts__collection">
              {selectedFonts.map((font) => {
                return <span>{font.fontDisplayName}</span>;
              })}
            </div>
            <div className="selected__fonts__code_snippet"></div>
          </div>
        </div>
        <div className="marketplace__section">
          <h1>Featured Fonts</h1>
          <FontRow fontsList={fontsList} selectedFonts={addFonts} />
        </div>
        <div className="marketplace__section">
          <h1>Top Fonts</h1>
          <FontRow fontsList={fontsList} selectedFonts={addFonts} />
        </div>
        <div className="marketplace__section">
          <h1>Latest Fonts</h1>
          <FontRow fontsList={fontsList} selectedFonts={addFonts} />
        </div>
      </div>
    </>
  );
}

export default MarketPlace;
