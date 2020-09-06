import React from "react";

import { render, cleanup, getByText } from "@testing-library/react";

import MyRoom from "../MyRoom";

afterEach(cleanup);

describe("MyRoom", () => {
  it("renders MyRoom", () => {
    const { getByText } = render(<MyRoom />);
    expect(getByText("Click here to edit your profile")).toBeInTheDocument();
  });

  it("renders Quiz Results section", () => {
    const { getByText } = render(<MyRoom />);
    expect(getByText("My Language Quiz Results")).toBeInTheDocument();
  });

  it("renders with a b/g image", () => {
    const { container } = render(<MyRoom />);
    expect(container.firstChild).toHaveClass("background--My-Room");
  });
});
