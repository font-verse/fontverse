import { useEffect } from "react";
import "../App.css";
import FontPreview from "./FontPreview";

function FontRow({ fontsList, selectedFonts }) {
  const handleFont = (selectedFont) => {
    if (selectedFont) {
      selectedFonts(selectedFont);
    }
  };

  // const handleDeselectFont = (deSelectedFont) => {
  //   removeFonts(deSelectedFont);
  // };

  return (
    <div className="fontsListRow">
      {fontsList.map((font) => {
        return (
          <FontPreview
            key={font.id}
            font={font}
            handleFont={handleFont}
            // handleDeselectFont={handleDeselectFont}
          />
        );
      })}
    </div>
  );
}

export default FontRow;
