import React from "react";

import { render, cleanup, fireEvent, getByText } from "@testing-library/react";

import WelcomeToCity from "../WelcomeToCity";

afterEach(cleanup);

describe("WelcomeToCity", () => {
  it("renders the 'Welcome To City' page", () => {
    const { getByText } = render(<WelcomeToCity />);
    expect(getByText("Welcome to")).toBeInTheDocument();
  });

  it("captures clicks", (done) => {
    function handleClick() {
      done();
    }
    const { getByText } = render(
      <button onClick={handleClick}>Go to Learn</button>
    );
    const node = getByText("Go to Learn");
    fireEvent.click(node);
  });
});
