import React from "react";

import { render, cleanup, fireEvent, getByText } from "@testing-library/react";

import SpeechBubble from "../learn/SpeechBubble";

afterEach(cleanup);

describe("SpeechBubble", () => {
  it("renders Translations section in SpeachBubble", () => {
    const { getByText } = render(<SpeechBubble />);
    expect(getByText("Translations")).toBeInTheDocument();
  });

  it("renders SpeachBubble", () => {
    const { getByText } = render(<SpeechBubble />);
    expect(getByText("Take Quiz!")).toBeInTheDocument();
  });

  it("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <button onClick={handleClick}>Take Quiz!</button>
    );

    const button = getByText("Take Quiz!");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
