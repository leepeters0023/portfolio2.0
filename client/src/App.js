import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Design from "./Design";
import WebDev from "./WebDev";
import Footer from "./Footer";

function App() {
  return (
    <div id="body">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/Home"} component={Home} />
        <Route path={"/WebDev"} component={WebDev} />
        <Route path={"/Design"} component={Design} />
      </Switch>
      <Footer />
    </div>
  );
}

// window.onpopstate=this. thing allows us to retain their values while people are using forward and back we need to listen this way
export default App;
