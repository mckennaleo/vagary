import React, { useState } from "react";
import SignIn from "./SignIn";
// radio
import MusicNoteIcon from "@material-ui/icons/MusicNote";
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
import IconButton from "@material-ui/core/IconButton";
import "./CircleMenu.css";
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
        <ExploreIcon />
      </label>
      <a href="#" className="menu-item player">
        <Tooltip title="Player" placement="right-start">
          <MusicNoteIcon />
        </Tooltip>
      </a>
      <a href="/" className="menu-item home">
        <Tooltip title="Home" placement="right-start">
          <PublicIcon />
        </Tooltip>
      </a>
      {props.user ? (
        <a href="/" className="menu-item sign-in">
          <Tooltip title="Logout" placement="right-start">
            <ExitToAppIcon onClick={() => props.logout()} />
          </Tooltip>
        </a>
      ) : (
        <a href="/sign-in" className="menu-item sign-in">
          <Tooltip title="Login" placement="right-start">
            <Face SignIn={SignIn} />
          </Tooltip>
        </a>
      )}
      {props.user ? (
        <a href="/my-room" className="menu-item my-room">
          <Tooltip title="My Room" placement="right-start">
            <MeetingRoomIcon />
          </Tooltip>
        </a>
      ) : (
        <a href="/sign-in" className="menu-item my-room">
          <Tooltip title="My Room" placement="right-start">
            <MeetingRoomIcon />
          </Tooltip>
        </a>
      )}
    </nav>
  );
}
