import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
import { Redirect } from 'react-router-dom';


import CurrentCity from './CurrentCity';

// import optional tippy styles for tooltip support
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';



export default function Globe() {

  // on marker hover, show city name
  function markerTooltipRenderer(marker) {
    return `${marker.cityName}`;
  }

  const options = {
    markerTooltipRenderer
  };

  // support rendering markers with simple data
  const markers = [
    {
      id: 'marker1',
      cityName: 'Oaxaca, Mexico',
      color: 'red',
      coordinates: [17.0654200, -96.7236500],
      value: 50,
    },
    {
      id: 'marker2',
      cityName: 'Montréal, Canada',
      color: 'red',
      coordinates: [45.501689, -73.567256],
      value: 50,
    },
    {
      id: 'marker3',
      cityName: 'Saigon, Vietnam',
      color: 'red',
      coordinates: [10.64975, 106.76198],
      value: 50,
    },
    {
      id: 'marker4',
      cityName: 'Budapest, Hungary',
      color: 'red',
      coordinates: [47.49622, 19.04588],
      value: 50,
    },
    {
      id: 'marker5',
      cityName: 'Istanbul, Turkey',
      color: 'red',
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
      state: { city: city }
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
        <p>{details}</p>
        <p>
          EVENT: type={city.type}, position=
            {JSON.stringify(city.pointerCityPosition)})
          </p>
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
      width="100vw"
      onClickMarker={onClickMarker}
      onDefocus={onDefocus}
    />
  </div>
)
}