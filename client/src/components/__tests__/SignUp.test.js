import React from "react";

import { render, cleanup, getByText, fireEvent } from "@testing-library/react";

import SignUp from "../SignUp";

afterEach(cleanup);

describe("SignUp", () => {
  it("renders SignUp", () => {
    const { getByText } = render(<SignUp />);
    expect(getByText("Already have an account? Sign in")).toBeInTheDocument();
  });

  it("renders the form", () => {
    const { container } = render(<SignUp />);
    expect(container.firstChild).toHaveClass(
      "MuiContainer-root MuiContainer-maxWidthXs"
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
