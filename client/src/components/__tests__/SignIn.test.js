import React from "react";

import { render, cleanup, getByText, fireEvent } from "@testing-library/react";

import SignIn from "../SignIn";

afterEach(cleanup);

describe("SignIn", () => {
  it("renders SignIn", () => {
    const { getByText } = render(<SignIn />);
    expect(getByText("Sign In")).toBeInTheDocument();
  });

  it("renders the form", () => {
    const { container } = render(<SignIn />);
    expect(container.firstChild).toHaveClass(
      "MuiGrid-root makeStyles-root-11 MuiGrid-container"
    );
  });

  it("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<button onClick={handleClick}>submit</button>);

    const button = getByText("submit");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
