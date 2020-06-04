import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a
              href="http://www.fstg-marrakech.ac.ma/"
              className="navbar-brand d-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>FSTG </strong>
              <svg
                className="bi bi-house-door-fill"
                width="1em"
                height="1em"
                viewBox="-1 1 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                <path
                  fillRule="evenodd"
                  d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-white">
                  Cette Web Application Devant Vous Est Un Miniprojet , Qui
                  Permet Au Etudiants Du Fstg Filier Mip/Mipc S4 D'acceder A
                  Divers Cours Sans Complexité
                  <i className="fa fa-map-pin" aria-hidden="true"></i>
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/ME-TH"
                      className="text-white"
                    >
                      Follow on Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/elhazzime-salaheddin-76330118a/"
                      className="text-white"
                    >
                      Like on Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:mipmipccommunity@gmail.com"
                      className="text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
