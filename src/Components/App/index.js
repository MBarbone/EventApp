import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "../NavBar/index.js";
import Home from "../Home/index";

import store from "../../store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
