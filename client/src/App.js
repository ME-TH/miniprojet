import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home/Home";
import Section from "./components/section/Section";
import Navbar1 from "./components/navbars/Navbar1";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import Navbar2 from "./components/navbars/Navbar2";
import Module from "./components/module/Module";

export default () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/section" component={Navbar1} />
      <Route path="/section/:module" component={Navbar2} />
      <Route path="/section" exact component={Section} />
      <Route
        path="/section/:module"
        exact
        component={(props) => <Module {...props} />}
      />
      <Route path="/section" exact component={Feedback} />
      <Route path="/section" component={Footer} />
    </Router>
  );
};
