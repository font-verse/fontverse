import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios/axios";
import axios from "axios";
import "../App.css";

function UploadFont() {
  const [fontName, setFontName] = useState("");
  const [fontStyle, setFontStyle] = useState("normal");
  const [active, setActive] = useState("300");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  let navigate = useNavigate();

  const handleUpload = async () => {
    let newFont = {
      fontName: fontName,
      fontDisplayName: fontName,
      price: "free",
      fontWeight: active,
      fontStyle: fontStyle,
    };

    if (file) {
      console.log(file);
      const data = new FormData();
      data.append("font", file[0]);

      try {
        const result = await instance.post("/font/uploadfile", data);
        console.log(result.data.filename);
        newFont.fontUrl = `https://api-fontverse.herokuapp.com/fonts/${result.data.filename}`;
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await instance.post("/font/upload", newFont);
      setResult(res);
      // console.log(res);
      // res ? navigate("/confirm") : navigate("/upload");
    } catch (error) {
      console.log(error);
    }
  };

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  useEffect(() => {
    console.log(fontStyle);
  }, [fontStyle]);

  return (
    <div className="uploadfont__container">
      <div className="uploadfont__section">
        <div className="uploadfont__left">
          <div className="uploadfont__left__container">
            <div className="uploadfont__heading">
              <h1 className="uploadfont__heading__left">Font Family</h1>
            </div>
            <div className="uploadfont__input">
              <input
                type="text"
                className="uploadfont__input__left"
                placeholder="FONT FAMILY"
                onChange={(e) => {
                  setFontName(capitalize(e.target.value));
                }}
                name="font"
              />
            </div>
            <div className="uploadfont__left__button">
              <button>back</button>
            </div>
          </div>
        </div>
        <div className="uploadfont__upload__file">
          <input
            type="file"
            id="file"
            className="uploadfont__upload__file__button"
            data-multiple-caption="{count} files selected"
            onChange={(e) => {
              setFile(e.target.files);
            }}
          />
          <label htmlFor="file">{file ? file[0]["name"] : "Select file"}</label>
          <p className="file-name"></p>
        </div>
        <div className="uploadfont__right">
          <div className="uploadfont__right__container">
            <div className="uploadfont__heading">
              <h1 className="uploadfont__heading__right">font weight</h1>
            </div>
            <div className="uploadfont__input__right">
              <button
                type="button"
                className=" uploadfont__input__right__button "
                onClick={() => {
                  setActive("100");
                }}
                id={active === "100" ? "active" : ""}
              >
                100
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("200");
                }}
                id={active === "200" ? "active" : ""}
              >
                200
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("300");
                }}
                id={active === "300" ? "active" : ""}
              >
                300
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("400");
                }}
                id={active === "400" ? "active" : ""}
              >
                400
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("500");
                }}
                id={active === "500" ? "active" : ""}
              >
                500
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("600");
                }}
                id={active === "600" ? "active" : ""}
              >
                600
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("700");
                }}
                id={active === "700" ? "active" : ""}
              >
                700
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("800");
                }}
                id={active === "800" ? "active" : ""}
              >
                800
              </button>
              <button
                type="button"
                className="uploadfont__input__right__button"
                onClick={() => {
                  setActive("900");
                }}
                id={active === "900" ? "active" : ""}
              >
                900
              </button>
            </div>
            <div className="uploadfont__fontweight">
              <button
                onClick={() => {
                  setFontStyle("normal");
                }}
              >
                normal
              </button>
              <button
                onClick={() => {
                  setFontStyle("italic");
                }}
              >
                italic
              </button>
            </div>
            <div className="uploadfont__right__button">
              <button
                onClick={() => {
                  handleUpload();
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFont;
