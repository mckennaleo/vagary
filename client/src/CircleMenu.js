import React, { Component } from "react";
import HelpIcon from "@material-ui/icons/Help";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import LanguageIcon from "@material-ui/icons/Language";

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
        </label>

        <a href="#" className="menu-item green">
          <LocationCityIcon />
        </a>
        <a href="#" className="menu-item orange">
          <MusicNoteIcon />
        </a>
        <a href="#" className="menu-item purple">
          <HomeIcon />
        </a>
        <a href="#" className="menu-item red">
          <FaceIcon />
        </a>
        <a href="#" className="menu-item blue">
          <LanguageIcon />
        </a>
        <a href="#" className="menu-item lightblue">
          <HelpIcon />
        </a>
      </nav>
    );
  }
}
