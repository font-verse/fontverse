import "../App.css";
import TextScroll from "../components/TextScroll";
import Catagories from "../components/Catagories";
import Hero from "../components/Hero";

import { FontContext } from "../context/FontContext";
import { useEffect } from "react";
import { useContext } from "react";

function Home() {
  const { fontsList, fetchFonts, fontName, setFontName, fetchFontByName } =
    useContext(FontContext);

  useEffect(() => {
    fetchFonts();
  }, []);

  return (
    <div className="h-auto bg-dark-200 ">
      <Hero
        fontName={fontName}
        setFontName={setFontName}
        fetchFontByName={fetchFontByName}
      />
      <TextScroll />
      <Catagories fontslist={fontsList} key={fontsList} />
    </div>
  );
}

export default Home;
