import { FiSearch } from "react-icons/fi";
import TextScroll from "./TextScroll";
import { Link } from "react-router-dom";

function Hero({ fontName, setFontName, fetchFontByName }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-dark-200 text-light gradient-2">
      <div className="flex items-start">
        {/* left side */}
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className="md:text-5xl text-3xl font-[Mattone] font-semibold mb-8">
            New dimension of typefaces
          </h1>
          <p className="mb-8 font-light">
            fonts that make your design stand out
          </p>

          <div className="w-[75%] flex justify-between h-14 border-2 border-highlight rounded-full overflow-hidden shadow-2xl">
            <input
              type="text"
              className="w-[90%] bg-transparent text-xl  px-6 focus:outline-none"
              placeholder="Search"
              onChange={(e) => {
                setFontName(e.target.value);
              }}
            />

            <button
              className="flex items-center justify-center w-[5rem] h-15  bg-highlight focus:outline-none rounded-l-3xl rounded-r-none"
              onClick={fetchFontByName}
            >
              <FiSearch fontSize={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
