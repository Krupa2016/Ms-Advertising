import React from "react";
import "./Card.css";

const Card = ({ image, title, text, heading, subheading }) => {
  return (
   
    <div className="card">
      
      {heading && subheading && (
        <div className="card-header font-saira">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
      )}
      <div className="card-img-container">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text  font-sairaCondensed">{text}</p>
      </div>
    </div>
  );
};

export default Card;
