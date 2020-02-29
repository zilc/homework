import React from "react";
import { render } from "react-dom";
import "./index.css";
import Autocomplete from "./Autocomplete";

function App() {
  return <Autocomplete />;
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
