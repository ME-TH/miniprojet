import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Module.css";

export default class extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="card mb-6 shadow-sm">
          <Link to={this.props.link}>
            <img className="image" src={this.props.image} alt="" />
          </Link>
          <h4 className="sectionname">{this.props.name}</h4>
          <div className="card-body">
            <p className="card-text">{this.props.desc}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={this.props.link}>
                  <button
                    type="button"
                    className="btn btn-dark my-2"
                    id="{{ id1 }}"
                  >
                    Voir le Cours
                    <svg
                      className="bi bi-eye"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
