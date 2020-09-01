import React from 'react'
import ExploreMap from './ExploreMap'

export default function Explore(props) {
  console.log("PROPS", props)
  const city = props.city
  const coordinates = props.coordinates
  return (
    <div>
      <ExploreMap city={city} coordinates={coordinates} />
    </div>
  )
}