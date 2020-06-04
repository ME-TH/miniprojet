import React, { Component } from "react";
import axios from "axios";
import "./Feedback.css";

export default class Feedback extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let feedback = document.getElementById("form");
    axios
      .post(`http://localhost:4500/logs/feedback`, this.state)
      .then(() => {
        alert("Thank You For The Submit !!");
        feedback.classList.add("hide");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, email, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Full Name :</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              required
              placeholder="Full Name"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email :</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              autoComplete="off"
              onChange={this.handleChange}
              required
            />
          </div>
        </div>

        <label>
          Comment Vous Avez Trouvez Cette Webapp ? Avez-Vous Des Suggestions :
        </label>
        <div className="form-group">
          <input
            type="text"
            name="comment"
            value={comment}
            className="form-control"
            placeholder="Commentaire ici .."
            autoComplete="off"
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block active">
          Send
        </button>
      </form>
    );
  }
}
