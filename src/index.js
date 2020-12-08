import React from "react";
import ReactDOM from "react-dom";

const getElement = () => {
  return <span>This project was created to better understand how `npx create-react-app` works under the hood when talking about tooling w/ `babel` and `webpack`.</span>;
};

ReactDOM.render(getElement(), document.querySelector("#root"));
