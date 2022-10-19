import "../App.css";
import ProfileImage from "../assets/profile.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <span>logo</span>
          </Link>
        </div>
        <div className="header__menu">
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            menu
          </span>
        </div>
      </div>
      {show && <Menu setShow={setShow} show={show} />}
    </>
  );
}

export default Header;
