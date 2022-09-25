import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureSection from "../components/FeatureSection";
import RightIll from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
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

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__left">
          <section>
            Explore unique fonts collection with latest and modern fontfaces
          </section>
          <div className="home__button">
            <Link to="/marketplace">
              <button>Explore</button>
            </Link>
          </div>
        </div>
        <div className="home__right">{/* <img src={RightIll} /> */}</div>
      </div>
      <FeatureSection fontsList={fontsList} />
    </div>
  );
}

export default Home;
