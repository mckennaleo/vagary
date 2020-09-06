import React from "react";
import { render, cleanup, fireEvent, getByText } from "@testing-library/react";
import ExploreDisplay from "../explore/ExploreDisplay";

afterEach(cleanup);

describe("ExploreDisplay", () => {
  it("ExploreDisplay should render", () => {
    const { container } = render(<ExploreDisplay />);
    expect(container.firstChild).toHaveClass("explore-display");
  });

  it("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <button onClick={handleClick}>Take City Knowledge Quiz!</button>
    );

    const button = getByText("Take City Knowledge Quiz!");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
