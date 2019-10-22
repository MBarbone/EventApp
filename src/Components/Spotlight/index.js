import React from "react";
import { Image, Form, FormField } from "semantic-ui-react";
import Img from "../../img/gvf.jpg";
import "./style.css";

const Spotlight = () => {
  return (
    <div className="spotlight-wrapper">
      <Image src={Img} />
      <div className="spotlight-form">THIS WILL BE THE FORM</div>
      <p className="spotlight-text">Greta Van Fleet</p>
    </div>
  );
};

export default Spotlight;
