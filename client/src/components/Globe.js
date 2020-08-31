import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
 
// import optional tippy styles for tooltip support
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
 

// export default function Globe() {
//   return <ReactGlobe />
// }


export default function Globe() {
  // support rendering markers with simple data
  const markers = [
    {
      id: 'marker1',
      city: 'Oaxaca, Mexico',
      color: 'red',
      coordinates: [17.0654200, -96.7236500],
      value: 50,
    },
    {
      id: 'marker2',
      city: 'Montréal, Canada',
      color: 'red',
      coordinates: [45.501689, -73.567256],
      value: 50,
    },
    {
      id: 'marker3',
      city: 'Saigon, Vietnam',
      color: 'red',
      coordinates: [10.64975, 106.76198],
      value: 50,
    },
    {
      id: 'marker4',
      city: 'Budapest, Hungary',
      color: 'red',
      coordinates: [47.49622, 19.04588],
      value: 50,
    },
    {
      id: 'marker5',
      city: 'Istanbul, Turkey',
      color: 'red',
      coordinates: [41.015137, 28.979530],
      value: 50,
    }
  ];
 
  // simple and extensive options to configure globe
  const options = {
    ambientLightColor: 'red',
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: 'gold',
    pointLightIntensity: 1.5,
    globeGlowColor: 'blue',
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };
 
  const [globe, setGlobe] = useState(null);
  console.log(globe); // captured globe instance with API methods
 
  // simple component usage
  return (
    <ReactGlobe
      height="100vh"
      // globeBackgroundTexture="https://your/own/background.jpg"
      globeCloudsTexture={null}
      // globeTexture="https://your/own/globe.jpg"
      initialCoordinates={[1.3521, 103.8198]}
      markers={markers}
      options={options}
      width="100%"
      // onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      // onGetGlobe={setGlobe}
      // onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      onGlobeTextureLoaded={() => console.log('globe loaded')}
      // onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
    />
  )
}