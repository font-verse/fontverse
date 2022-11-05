import "../App.css";
import ProfileImage from "../assets/profile.png";
import Logo from "../assets/logo.png";
import { Button } from "../components/Components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import {
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsFillCollectionFill,
} from "react-icons/bs";

import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import Collection from "./Collection";

function Header() {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [toggleCollection, setToggleCollection] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPos(position);
  };

  const handleToggleCollection = () => {
    setToggleCollection(!toggleCollection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <>
      <nav
        className={`w-full flex justify-around items-center p-4 fixed overflow-x-hidden z-50 ${
          scrollPos > 50 ? "bg-dark-200/90 backdrop-blur-2xl" : "bg-transparent"
        }  `}
      >
        {/* logo */}
        <div className="">
          <Link to="/">
            <span className="text-light text-sm uppercase font-[Mattone] font-black text-shadow">
              fontverse
            </span>
          </Link>
        </div>

        {/* Middle Elements */}
        <div className="">
          <ul className="md:flex hidden text-sm text-light list-none">
            <li className="mx-2 cursor-pointer hover:text-highlight">
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li className="mx-2 cursor-pointer hover:text-highlight">
              Inspiration
            </li>
            <li className="mx-2 cursor-pointer hover:text-highlight">
              Combinations
            </li>
            <li className="mx-2 cursor-pointer hover:text-highlight">
              Featured
            </li>

            <li className="mx-6 md:flex hidden items-center justify-center ">
              <BsFillCollectionFill
                fontSize={25}
                onClick={handleToggleCollection}
                className="text-light hover:text-highlight cursor-pointer"
              />
            </li>
          </ul>
        </div>

        {/* Login and Profile */}
        <div className="flex items-center">
          {/* bg-[#FA5F1A]  */}
          <BsFillCollectionFill
            fontSize={25}
            onClick={handleToggleCollection}
            className="hover:text-highlight text-light mr-5 md:hidden cursor-pointer"
          />
          {user ? (
            <img
              src={ProfileImage}
              className=" w-8 h-8 flex  justify-center items-center rounded-full object-cover"
            />
          ) : (
            <Link to="/login">
              {/* <span className="text-white cursor-pointer bg-highlight hover:bg-purple-800 flex items-center justify-center text-sm rounded-full w-20 h-8 shadow-md">
              Login
            </span> */}
              <Button
                text="Login"
                width={20}
                height={8}
                textSize="sm"
                margin={0}
              />
            </Link>
          )}
        </div>
        {/* Menu Mobile view */}
        <div className="flex md:hidden">
          {!toggle ? (
            <SlMenu
              fontSize={25}
              className="text-light md:hidden cursor-pointer"
              onClick={() => {
                setToggle(true);
              }}
            />
          ) : (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggle(false)}
            />
          )}
        </div>
      </nav>

      {toggleCollection && <Collection />}

      {toggle && (
        <ul className="w-full flex flex-col fixed h-screen justify-center items-center bg-dark-200 md:hidden text-5xl text-light list-none z-[45]">
          <li className="mx-2 py-5 cursor-pointer hover:text-highlight">
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li className="mx-2 py-5 cursor-pointer hover:text-highlight">
            Inspiration
          </li>
          <li className="mx-2 py-5 cursor-pointer hover:text-highlight">
            Combinations
          </li>
          <li className="mx-2 py-5 cursor-pointer hover:text-highlight">
            Featured
          </li>

          <div className="flex justify-between items-center">
            <BsGithub
              fontSize={30}
              className="cursor-pointer hover:text-[#a6b1b7] m-5"
            />
            <BsTwitter
              fontSize={30}
              className="cursor-pointer hover:text-[#1da1f2] m-5"
            />
            <BsInstagram
              fontSize={30}
              className="cursor-pointer hover:text-[#c32aa3] m-5"
            />
          </div>
        </ul>
      )}
    </>
  );
}

export default Header;
