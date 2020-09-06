import React from "react";
import { render, cleanup, getByText } from "@testing-library/react";
import App from "./App";
import axios from "axios";
// import { IntType } from "three";
// import { ExpansionPanelActions } from "@material-ui/core";

afterEach(cleanup);

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  it("shows a default playlist on the home page", () => {
    const { getByText } = render(<App />);
    expect(getByText("Ambient Space Sounds")).toBeInTheDocument();
  });
});

// Ambient Space Sounds
