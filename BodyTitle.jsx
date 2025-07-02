

import React from "react";
import "../BodyTitle/BodyTitle.css";
import { useState } from "react";
import { useEffect } from "react";

const BodyTitle = ({ normalText, gradientText, secondtext = "." }) => {
  return (
    <>
      <h1 className="body-title">
        {normalText} <span className="gardex">{gradientText}</span>
      </h1>
      <p className="body-subtitle">{secondtext}</p>

    </>
  );
};


const WorkBodyTitle = ({ normalText, gradientText, secondtext = "" }) => {
  return (
    <>
      <h1 className="body-title font-josefinSlab">{normalText} </h1>
      <p className="body-subtitle font-josefinSlab"> {secondtext} <span className="gardex">{gradientText}</span></p>

    </>
  );
};




const HomeBodyTitle = ({ normalText, gradientTextArray = [], secondtext = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gradientTextArray.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [gradientTextArray.length]);

  return (
    <>
      <h1 className="body-title">{normalText} </h1>
      <p className="body-subtitle">
        {secondtext}{" "} <br/>
        <span className="gardex fade">
          {gradientTextArray[currentIndex]}
        </span>
      </p>
    </>
  );
};


const PerpectiveTitle = ({ pnormalText,psnomarltext, pgradientText, psecondtext = "." }) => {
  return (
    <>
      <h1 className="pbody-title font-josefinSlab">
        {pnormalText}  <br/>{psnomarltext} <br/><span className="pgardex">{pgradientText}</span><br/>{psecondtext}
      </h1>
    </>
  );
};



export { BodyTitle, WorkBodyTitle ,HomeBodyTitle,PerpectiveTitle};
export default BodyTitle; 
