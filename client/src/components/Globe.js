import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
import { Redirect } from 'react-router-dom';

// import optional tippy styles for tooltip support
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';



export default function Globe() {

  // on marker hover, show city name
  function markerTooltipRenderer(marker) {
    return `${marker.cityName}, ${marker.country}`;
  }

  const options = {
    markerTooltipRenderer,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    enableCameraRotate: true,
    cameraRotateSpeed: 0.1,
    enableCameraAutoRotate: true,
    cameraAutoRotateSpeed: 0.01,
  };

  // support rendering markers with simple data
  const markers = [
    {
      id: 'marker1',
      cityName: 'Oaxaca',
      country: 'Mexico',
      color: 'purple',
      coordinates: [17.0654200, -96.7236500],
      value: 50,
    },
    {
      id: 'marker2',
      cityName: 'Montréal',
      country: 'Canada',
      color: 'purple',
      coordinates: [45.501689, -73.567256],
      value: 50,
    },
    {
      id: 'marker3',
      cityName: 'Saigon', 
      country: 'Vietnam',
      color: 'purple',
      coordinates: [10.64975, 106.76198],
      value: 50,
    },
    {
      id: 'marker4',
      cityName: 'Budapest',
      country: 'Hungary',
      color: 'purple',
      coordinates: [47.49622, 19.04588],
      value: 50,
    },
    {
      id: 'marker5',
      cityName: 'Istanbul',
      country: 'Turkey',
      color: 'purple',
      coordinates: [41.015137, 28.979530],
      value: 50,
    }
  ];

  const [city, setCity] = useState(null);
  const [details, setDetails] = useState(null);
  const [activeGlobe, setActiveGlobe] = useState(true);

  function onClickMarker(marker, markerObject, city) {
    setCity({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerCityPosition: { x: city.clientX, y: city.clientY }
    });
    setDetails(markerTooltipRenderer(marker));
  }

  function onDefocus(previousFocus) {
    setCity({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
  }

  const yesHandler = () => {
    // console.log(city)
    setActiveGlobe(false)
  };

  if (!activeGlobe) {
    return (
    < Redirect
    to = {{
      pathname: "/city",
      state: { city }
    }}
  />)
}
// simple component usage
return (
  <div>
    {details && (
      <div
        style={{
          background: "white",
          position: "absolute",
          fontSize: 20,
          bottom: 0,
          right: 0,
          padding: 12
        }}
      >
        <form>
          <h4>Would you like to visit {city.marker.cityName}?</h4>
          <button type="button" onClick={yesHandler}>Yes</button>
          <button type="button" onClick={onDefocus}>No</button> {/* FIX Should zoom out per onDefocus function...*/}
        </form>
      </div>
    )}

    <ReactGlobe
      height="100vh"
      markers={markers}
      options={options}
      width="100%"
      onClickMarker={onClickMarker}
      onDefocus={onDefocus}
    />
  </div>
)
}