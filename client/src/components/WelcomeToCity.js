import React from 'react';
import ExploreMap from './explore/ExploreMap'
import Explore from './explore/Explore'

export default function WelcomeToCity(props) {

  const city = props.city
  const coordinates = props.coordinates

  console.log("????", city)

  console.log("????", coordinates)
  {/* need to take in props to get city name, conditional render background image based on city */}

  return(
    <div>
       {/* Placeholder for now - city background + buttons to redirect to Learn + Explore */}
       <Explore city={city} coordinates={coordinates}/>
    </div>
  )
}