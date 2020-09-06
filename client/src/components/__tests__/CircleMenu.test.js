import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import CircleMenu from "../CircleMenu";
import PublicIcon from "@material-ui/icons/Public";

afterEach(cleanup);

describe("CircleMenu", () => {
  it("CircleMenu should render", () => {
    const { container } = render(<CircleMenu />);
    expect(container.firstChild).toHaveClass("menu");
  });

  it("My Room button should render", () => {
    const { container } = render(<MeetingRoomIcon />);
    expect(container.firstChild).toHaveClass("MuiSvgIcon-root");
  });

  it("Back To Home button should render", () => {
    const { container } = render(<PublicIcon />);
    expect(container.firstChild).toHaveClass("MuiSvgIcon-root");
  });
});
