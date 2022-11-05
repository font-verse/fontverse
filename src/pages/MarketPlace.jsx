import { useEffect, useContext } from "react";
import FontBox from "../components/FontBox";
import SearchInput from "../components/SearchInput";
import { FontContext } from "../context/FontContext";

function MarketPlace() {
  const { fontsList, fetchFonts, fontName, setFontName, fetchFontByName } =
    useContext(FontContext);

  useEffect(() => {
    fontName ? fetchFontByName() : fetchFonts();
  }, [fontName]);

  return (
    <>
      <div className="py-32">
        <div className="flex flex-col items-center justify-center">
          <SearchInput setFontName={setFontName} />
          <h1 className="text-light z-20 my-5 text-5xl font-[Mattone]">
            Featured Fonts
          </h1>
          {fontsList.map((font, index) => {
            return (
              <FontBox
                key={index}
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
