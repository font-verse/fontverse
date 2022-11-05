import "../App.css";

function TextScroll() {
  return (
    <div className="h-[50vh] bg-transparent">
      <div className="text-scroll-container">
        <span className="text-scroll-left text-light font-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          sapiente animi voluptate! Quos sunt incidunt aliquid{" "}
        </span>
      </div>
      <div className="text-scroll-container">
        <span className="text-scroll-right text-purple-900 font-black">
          123456789239187391809372083027387038470927019874835750813407
        </span>
      </div>
    </div>
  );
}

export default TextScroll;
