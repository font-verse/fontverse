import "../App.css";
import ProfileImage from "../assets/profile.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [user, setUser] = useState(null);
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="header__middle">
          <div className="header__search">
            <input type="text" />
            <button>Q</button>
          </div>
          <div className="header__fontlist">
            <Link to="/marketplace">MarketPlace</Link>
          </div>
        </div>
        <div className="header__profile">
          {user ? (
            <div className="header__image">
              <img src={ProfileImage} alt="profile" />
            </div>
          ) : (
            <div className="header__auth">
              <span>Sign In</span>
              <span>Sign Up</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
