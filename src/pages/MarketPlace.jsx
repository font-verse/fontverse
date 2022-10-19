import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FontBox from "../components/FontBox";

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
  useEffect(() => {
    const fetchFonts = async () => {
      await axios
        .get("https://api-fontverse.herokuapp.com/api/font/getfonts")
        .then((res) => {
          setFontsList(res.data.data);
        });
    };

    fetchFonts();
  }, []);

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
          <h1>Featured Fonts</h1>
          {fontsList.map((font) => {
            return (
              <FontBox
                fontFamily={font.fontName}
                fontWeight={font.fontWeight}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MarketPlace;
