import React, { useState } from "react";
import ReactGlobe from "react-globe";
import { Redirect } from "react-router-dom";

// import optional tippy styles for tooltip support
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "./Globe.scss";

export default function Globe({ user, token, userId, city, setCity }) {
  const userData = {
    user,
    token,
    userId,
  };
  // on marker hover, show city name
  function markerTooltipRenderer(marker) {
    return `${marker.cityName}, ${marker.country}`;
  }
  const options = {
    markerTooltipRenderer,
    focusAnimationDuration: 2000,
    focusEasingFunction: ["Linear", "None"],
    enableCameraRotate: true,
    cameraRotateSpeed: 0.1,
    enableCameraAutoRotate: true,
    cameraAutoRotateSpeed: 0.01,
  };

  // support rendering markers with simple data
  const markers = [
    {
      id: "marker1",
      cityName: "Oaxaca",
      country: "Mexico",
      language: "es",
      color: "purple",
      coordinates: [17.06542, -96.72365],
      value: 50,
      city_id: "150801",
      background: "../docs/oaxaca.jpg",
    },
    {
      id: "marker2",
      cityName: "Montréal",
      country: "Canada",
      language: "fr",
      color: "purple",
      coordinates: [45.501689, -73.567256],
      value: 50,
      city_id: "155032",
      background: "../docs/montreal.jpg",
    },
    {
      id: "marker3",
      cityName: "Saigon",
      country: "Vietnam",
      language: "vi",
      color: "purple",
      coordinates: [10.762622, 106.660172],
      value: 50,
      city_id: "293925",
      background: "../docs/saigon.jpg",
    },
    {
      id: "marker4",
      cityName: "Budapest",
      country: "Hungary",
      language: "hu",
      color: "purple",
      coordinates: [47.49622, 19.04588],
      value: 50,
      city_id: "274887",
      background: "../docs/budapest.jpg",
    },
    {
      id: "marker5",
      cityName: "Istanbul",
      country: "Turkey",
      language: "tr",
      color: "purple",
      coordinates: [41.015137, 28.97953],
      value: 50,
      city_id: "293974",
      background: "../docs/istanbul.jpg",
    },
  ];

  const [details, setDetails] = useState(null);
  const [activeGlobe, setActiveGlobe] = useState(true);

  function onClickMarker(marker, markerObject, city) {
    setCity({
      type: "CLICK",
      marker,
      userData,
      markerObjectID: markerObject.uuid,
      pointerCityPosition: { x: city.clientX, y: city.clientY },
    });
    setDetails(markerTooltipRenderer(marker));
  }

  function onDefocus(previousFocus) {
    setCity({
      type: "DEFOCUS",
      previousFocus,
    });
    setDetails(null);
  }

  const yesHandler = () => {
    console.log("CITY FROM GLOBE: ", city);
    setActiveGlobe(false);
  };

  if (!activeGlobe) {
    return (
      <Redirect
        to={{
          pathname: "/city",
          state: { city },
        }}
      />
    );
  }

  // simple component usage
  return (
    <div>
      {/* <div class="header">Where would you like to travel today?</div> */}
      {details && (
        <div class="travel-prompt"
          style={{
            position: "fixed",
            bottom: 50,
            right: 50,
            width: 200,
            padding: 12,
          }}
        >
          <form>
            <div class="travel-prompt-content">
            <div class="travel-prompt-header">
            <div class="travel-prompt-title">Welcome to Vagary</div>
            <div class="travel-prompt-text">Are we off to {city.marker.cityName}?</div>
            </div>
            <div class="travel-prompt-buttons">
            <button class="btn btn-outline-light" type="button" onClick={yesHandler}>
              🛫
            </button>
            <button class="btn btn-outline-light" type="button" onClick={onDefocus}>
              🌎
            </button>
            </div>
            </div>
          </form>
        </div>
      )}
      <ReactGlobe
        name="globe"
        height="100vh"
        markers={markers}
        options={options}
        width="100%"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}
