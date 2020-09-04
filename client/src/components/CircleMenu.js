import React from "react";
// radio
import MusicNoteIcon from "@material-ui/icons/MusicNote";
// home/globe
import PublicIcon from "@material-ui/icons/Public";
// logout
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// my room
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
// compass
import ExploreIcon from "@material-ui/icons/Explore";
import "./CircleMenu.css";

export default class CircleMenu extends React.Component {
  render() {
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
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
          <ExploreIcon />
        </label>

        <a href="#" className="menu-item orange">
          <div>
            <MusicNoteIcon />
          </div>
        </a>
        <a href="/" className="menu-item purple">
          <PublicIcon />
        </a>
        <a href="" className="menu-item red">
          <ExitToAppIcon />
        </a>
        <a href="#" className="menu-item blue">
          <MeetingRoomIcon />
        </a>
      </nav>
    );
  }
}
