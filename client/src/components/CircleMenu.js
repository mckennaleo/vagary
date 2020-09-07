import React, { useState } from "react";
import SignIn from "./SignIn";
// home/globe
import PublicIcon from "@material-ui/icons/Public";
// login
import Face from "@material-ui/icons/Face";
// logout
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// my room
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
// compass
import ExploreIcon from "@material-ui/icons/Explore";
// button
import "./CircleMenu.scss";
import Tooltip from "@material-ui/core/Tooltip";

export default function CircleMenu(props) {
  return (
    <nav className="menu">
      <input
        type="checkbox"
        href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label className="menu-open-button" for="menu-open">
        <Tooltip title="Menu" placement="right-start">
          <ExploreIcon className="icon" />
        </Tooltip>
      </label>
      {props.user ? (
        <a href="/my-room" className="menu-item my-room">
          <Tooltip title="My Room" placement="right-start">
            <MeetingRoomIcon className="icon" />
          </Tooltip>
        </a>
      ) : (
        <a href="/sign-in" className="menu-item my-room">
          <Tooltip title="My Room" placement="right-start">
            <MeetingRoomIcon className="icon" />
          </Tooltip>
        </a>
      )}
      <a href="/" className="menu-item home">
        <Tooltip title="Home" placement="right-start">
          <PublicIcon className="icon" />
        </Tooltip>
      </a>
      {props.user ? (
        <a href="/" className="menu-item sign-in">
          <Tooltip title="Logout" placement="right-start">
            <ExitToAppIcon className="icon" onClick={() => props.logout()} />
          </Tooltip>
        </a>
      ) : (
        <a href="/sign-in" className="menu-item sign-in">
          <Tooltip title="Login" placement="right-start">
            <Face className="icon" SignIn={SignIn} />
          </Tooltip>
        </a>
      )}
    </nav>
  );
}
