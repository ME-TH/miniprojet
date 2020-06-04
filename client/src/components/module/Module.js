import React, { Component } from "react";
import axios from "axios";
import "./Module.css";
import Modulecard from "./modulecard/Modulecard";

export default class extends Component {
  state = {
    match: {
      algorithmique: { id: 1 },
      mathematique: { id: 2 },
      physique: { id: 3 },
    },
    loading: false,
    data: [],
    id: "",
  };

  componentDidMount() {
    const { module } = this.props.match.params;
    axios.get(`http://localhost:4500/section/module`).then((res) => {
      this.setState({
        loading: true,
        data: res.data,
        id: this.state.match[module].id,
      });
    });
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.state.loading ? (
              this.state.data
                .filter((info) => info.id === this.state.id)
                .map((info, index) => {
                  return (
                    <Modulecard
                      key={index}
                      image={info.image}
                      name={info.name}
                      link={info.link}
                      desc={info.desc}
                    />
                  );
                })
            ) : (
              <h1>Loading Components ...</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
