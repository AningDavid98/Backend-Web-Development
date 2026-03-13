import React from "react";
import ReactDOM from "react-dom";

const lname = "David";
const fname = "Amponsah";
const number = 98;

ReactDOM.render(
  <div>
    <h1>
      Hello {lname} {fname}!
    </h1>
    <p>Your lucky number is {number}.</p>
  </div>,
  document.getElementById("root")
);
