import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Steve Jobs"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpav1iIAD5EfBHc-QxBecROMSg5a8jouIN5Q&s"
      tel="+233561528533"
      email="amponsahaning@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
