import React from "react";
import "./App.css";
import "./stylemodule.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navbar from "../Navbar";
import Footer from "../Footer";

const App1 = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App1;
