import React from "react";
import "./Banner.css";
import luffy from "../../assets/luffy.png";

const Banner = () => {
  return (
    <div className="banner mt-9">
      <img  src={luffy} alt="luffy_banner" />
    </div>
  );
};

export default Banner;
