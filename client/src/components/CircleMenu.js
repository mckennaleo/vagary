import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import LanguageIcon from "@material-ui/icons/Language";

export default class CircleMenu extends React.Component {
  render() {
    return (
      <nav class="menu">
        <input
          type="checkbox"
          href="#"
          class="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label class="menu-open-button" for="menu-open">
          <span class="lines line-1"></span>
          <span class="lines line-2"></span>
          <span class="lines line-3"></span>
        </label>

        <a href="#" class="menu-item blue">
          <HelpIcon />
        </a>
        <a href="#" class="menu-item green">
          <LocationCityIcon />
        </a>
        <a href="#" class="menu-item red">
          <HomeIcon />
        </a>
        <a href="#" class="menu-item purple">
          <FaceIcon />
        </a>
        <a href="#" class="menu-item orange">
          <LanguageIcon />
        </a>
        <a href="#" class="menu-item lightblue">
          <i class="fa fa-diamond"></i>
        </a>
      </nav>
    );
  }
}
