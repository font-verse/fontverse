import { useState } from "react";
import "../App.css";

function Menu({ setShow, show }) {
  return (
    <div className="menu__container">
      <div className="menu__left">
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </div>
      <div className="menu__right">
        <span
          onClick={() => {
            setShow(!show);
          }}
        >
          close
        </span>
      </div>
    </div>
  );
}

export default Menu;
