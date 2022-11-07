import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { HiOutlineClipboard } from "react-icons/hi";
import { FontContext } from "../context/FontContext";
import { IoIosRemove } from "react-icons/io";
import { CopyBlock } from "react-code-blocks";
import { Link } from "react-router-dom";

function Collection() {
  const { selectedFonts, removeFromCollection } = useContext(FontContext);

  const [font, setFont] = useState("");

  const FVTheme = {
    lineNumberColor: `#383a42`,
    lineNumberBgColor: `#fafafa`,
    backgroundColor: `#0f172a`,
    textColor: `#F7F0F0`,
    substringColor: `#e45649`,
    keywordColor: `#a626a4`,
    attributeColor: `#9333ea`,
    selectorAttributeColor: `#e45649`,
    docTagColor: `#a626a4`,
    nameColor: `#e45649`,
    builtInColor: `#c18401`,
    literalColor: `#0184bb`,
    bulletColor: `#4078f2`,
    codeColor: `#F7F0F0`,
    additionColor: `#9333ea`,
    regexpColor: `#9333ea`,
    symbolColor: `#4078f2`,
    variableColor: `#986801`,
    templateVariableColor: `#986801`,
    linkColor: `#4078f2`,
    selectorClassColor: `#986801`,
    typeColor: `#986801`,
    stringColor: `#9333ea`,
    selectorIdColor: `#4078f2`,
    quoteColor: `#a0a1a7`,
    templateTagColor: `#cbd5e1`,
    deletionColor: `#e45649`,
    titleColor: `#4078f2`,
    sectionColor: `#e45649`,
    commentColor: `#a0a1a7`,
    metaKeywordColor: `#383a42`,
    metaColor: `#4078f2`,
    functionColor: `#383a42`,
    numberColor: `#986801`,
  };

  useEffect(() => {
    setFont(selectedFonts.join(","));
  }, [selectedFonts]);

  return (
    <div className=" bg-dark-200 fixed h-full w-full z-[45] text-center md:text-left flex items-center justify-center">
      <div className="flex justify-center md:justify-between md:flex-row flex-col h-screen md:max-w-[1024px] md:pt-0 pt-24">
        <div className="flex-1 flex flex-col py-20 md:w-[50%] w-full ">
          <span className="text-light text-2xl font-[Mattone] mb-5">
            Fonts Selected
          </span>

          <div className="px-5 md:px-0 flex flex-col overflow-scroll scrollbar-thin scrollbar-thumb-[#1e293b] scrollbar-track-transparent">
            {selectedFonts.map((f, index) => (
              <div className="md:py-5 py-0 h-20 border-b border-b-highlight my-2 flex items-center justify-between">
                <Link to={`/font/${f}`}>
                  <span className="text-light md:text-5xl text-3xl">{f}</span>
                </Link>
                <IoIosRemove
                  className="text-5xl text-light hover:text-highlight cursor-pointer"
                  onClick={() => {
                    removeFromCollection(index);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-evenly md:ml-20 md:py-20 px-5 md:px-0 text-center">
          <span className="text-light mb-7">
            Paste this link in your project and enjoy the taste of fresh fonts
          </span>
          {font ? (
            <div className=" w-[20rem] border border-highlight rounded-2xl box-shadow md:w-[100%] p-5 md:my-10 scrollbar-none overflow-scroll">
              <CopyBlock
                language="html"
                text={`<link rel="stylesheet" href="https://api-fontverse.herokuapp.com/api/font/style?fontFamily=${font}" />`}
                theme={FVTheme}
                showLineNumbers={false}
                wraplines={true}
              />
            </div>
          ) : (
            <span className="text-light text-3xl m-5">No fonts selected✌️</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
