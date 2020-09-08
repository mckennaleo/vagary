import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, latLngBounds } from "leaflet";

import "../Explore.scss";
import "../SpeechBubble.scss";
import "../../App.css";

export default function ExploreMap(props) {
  // landmark coordinates
  const lat = props.coordinates[0];
  const long = props.coordinates[1];
  const city = props.city;
  const language = props.language;

  console.log("EXPLORE MAP PROPS", city, language);

  const [cityQuiz, setCityQuiz] = useState(false);
  const cityParams = [
    {
      name: city,
      language: language,
    },
  ];

  const videoToggle = () => {
    const x = document.getElementById("explore-player");
    x.style.visibility = "visible";
  };

  const goToCityQuiz = () => {
    // console.log(city)
    setCityQuiz(cityParams);
  };
  if (cityQuiz) {
    return (
      <Redirect
        cityParams={cityParams}
        push
        to={{
          pathname: "/cityquiz",
          state: { cityQuiz },
        }}
      />
    );
  }

  return (
    <article class="explore-map">
      <Map center={[lat, long]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {props.cityResults.map((position, idx) => (
          <Marker
            key={position.name}
            position={position.coordinates}
            // toggles popup on hover
            onMouseOver={(e) => {
              e.target.openPopup();
            }}
            onMouseOut={(e) => {
              e.target.closePopup();
            }}
            onClick={(e) => {
              const favBtn = document.getElementById("fave");
              props.onSelect(position);
              videoToggle();
            }}
          >
            <Popup>
              <span>{position.name}</span> <br />
              <img src={position.thumbnail} />
            </Popup>
          </Marker>
        ))}
      </Map>

      <div class="quiz-button-header">
        <div class="quiz-button-header-title">
          Ready to test your knowledge?
        </div>
        <button
          type="button"
          cityParams={cityParams}
          onClick={goToCityQuiz}
          class="alert alert-primary"
        >
          Take Quiz!
        </button>
      </div>
    </article>
  );
}
