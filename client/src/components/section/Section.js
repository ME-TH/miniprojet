import React, { Component } from "react";
import axios from "axios";
import Sectioncard from "./sectioncard/Sectioncard";

export default class extends Component {
  state = {
    loading: false,
    data: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:4500/section`).then((res) => {
      this.setState({ loading: true, data: res.data });
    });
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.state.loading ? (
              this.state.data.map((info, index) => {
                return (
                  <Sectioncard
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
