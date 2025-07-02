import React from 'react';
import './GetInTouch.css'; // Import CSS for styling
import logo from "../../assets/ms_logo.png";

const GetInTouch = ({headingText, buttonText}) => {
  return (
    <div className="get-in-touch-container ">
      <div className="content-wrapper ">
        <div className="text-section">
        {headingText}<br/>
        <button className="cta-button">{buttonText}</button>
        </div>
        <div className="button-section">
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;