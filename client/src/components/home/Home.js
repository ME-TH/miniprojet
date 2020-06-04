import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home" class="xyz">
        <Link to="/section">
          <button type="button" class="btn btn-dark btn-circle btn-xl">
            Black
          </button>
        </Link>
      </div>
    );
  }
}
