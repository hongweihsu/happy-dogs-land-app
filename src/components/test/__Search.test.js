import React from "react";
import ReactDOM from "react-dom";
import Search from "../Search";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search></Search>, div);
});
