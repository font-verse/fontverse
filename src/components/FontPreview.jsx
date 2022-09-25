import { useEffect } from "react";
import { useState } from "react";
import "../App.css";

function FontPreview({ font, handleFont }) {
  const [selected, setSelected] = useState(false);
  // const [deSelected, setDeseleted] = useState(true);

  useEffect(() => {
    if (selected) {
      handleFont(font);
    }
  }, [selected]);

  return (
    <div
      className="fontpreview"
      onClick={() => {
        setSelected(!selected);
        // setDeseleted(!deSelected);
      }}
    >
      <div className="fontpreview__container">
        <div className="fontpreview__sampletext">
          <span style={{ fontFamily: font.fontName }}>
            This is the sample text
          </span>
        </div>

        <div className="fontpreview__name">
          <span style={{ fontFamily: font.fontName }}>
            {font.fontDisplayName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FontPreview;
