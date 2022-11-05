import "../App.css";
import { useState } from "react";
import TextScroll from "../components/TextScroll";
import Catagories from "../components/Catagories";

import { useEffect } from "react";
import Hero from "../components/Hero";
import { useContext } from "react";
import { FontContext } from "../context/FontContext";

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
