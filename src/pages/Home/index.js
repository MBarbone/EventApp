import React from "react";
import { Fragment } from "react";
import Hero from "../../Components/Hero/index";
import Spotlight from "../../Components/Spotlight/index";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Spotlight />
      </Fragment>
    );
  }
}

export default Home;
