
import React from "react";
import "./logoStrip.css";

const LogoStrip = ({ images }) => {
    return (
        <div className="logo-strip">
            <div className="logo-container">
                {images.map((imgSrc, index) => (
                 <img key={index} src={imgSrc} alt={`Company Logo ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default LogoStrip;


