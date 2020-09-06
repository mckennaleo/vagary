import React from "react";

import { render, cleanup, fireEvent, getByText } from "@testing-library/react";

import WelcomeToCity from "../WelcomeToCity";
import { ExpansionPanelActions } from "@material-ui/core";

afterEach(cleanup);

describe("WelcomeToCity", () => {
  it("renders the 'Welcome To City' page", () => {
    const { getByText } = render(<WelcomeToCity />);
    expect(getByText("Welcome to")).toBeInTheDocument();
  });
});
