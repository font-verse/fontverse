import "../App.css";
import FontPreview from "./FontPreview";

function FeatureSection({ fontsList }) {
  return (
    <div className="feature__section">
      <div className="feature__section__container">
        <h1>Featured Fonts</h1>
        <div className="feature__section__fonts">
          {fontsList.map((font) => {
            return <FontPreview font={font} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
