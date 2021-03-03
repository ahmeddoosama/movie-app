import React from "react";
import "./App.css"
import Header from "../elements/Header/Header";
import Home from "../home/Home";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;
