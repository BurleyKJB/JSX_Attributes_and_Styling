import React from "react";
import ReactDOM from "react-dom";

const myIMG = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favorite Foods
    </h1>
    <img className="food-img" src={myIMG} />
  </div>,
  document.getElementById("root")
);
