import "../App.css";
import FontBox from "./FontBox";

function Catagories({ fontslist }) {
  return (
    <div className="catagories">
      <h1>Catagories</h1>
      <div className="catagories-options">
        <div className="catagories-option-row1">
          <button>All Fonts</button>
          <button>All Fonts</button>
          <button>All Fonts</button>
        </div>
        <div className="catagories-option-row2">
          <button>All Fonts</button>
          <button>All Fonts</button>
          <button>All Fonts</button>
          <button>All Fonts</button>
        </div>
      </div>
      <div className="catagories-fonts">
        {fontslist.map((font) => {
          return (
            <FontBox fontFamily={font.fontName} fontWeight={font.fontWeight} />
          );
        })}
      </div>
    </div>
  );
}

export default Catagories;
