import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    const details = [
      {
        name: "Tiger",
        number: 3890,
        endangered: true
      },
      {
        name: "Brown Bear",
        number: 2000,
        endangered: false
      },
      {
        name: "Red Panda",
        number: 1000,
        endangered: true
      }
    ];
    return (
      <div className="App">
        <Animal details={details}>
          <h3>Endangered Animals</h3>
        </Animal>
      </div>
    );
  }
}

const Animal = (props) => {
  const listDetails = props.details.map((v, i) => {
    return (
      <li key={i}>
        <p> name: {v.name}</p>
        <p> number: {v.number}</p>
        <p> endangered: {v.endangered ? "Yes" : "No"}</p>
        <hr />
      </li>
    );
  });
  return (
    <div>
      {props.children}
      <ul>{listDetails}</ul>
    </div>
  );
};

export default App;
