import React from "react";
import img from "../../img/herobackground.jpg";

const heroStyles = {
  backgroundImage: `url(${img})`,
  backgroundColor: "#cccccc",
  height: "675px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  position: "absolute",
  top: "0",
  zIndex: "-1"
};
const Hero = () => {
  return <div className="hero-banner-img" style={heroStyles}></div>;
};

export default Hero;
