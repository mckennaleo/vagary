import React from 'react'
import ExploreMap from './ExploreMap'

export default function Explore(props) {
  console.log("????", props)
  
  const city = props.location.state.explore[0].name
  const coordinates = props.location.state.explore[0].coordinates   
  return (
    <div>
      {<ExploreMap city={city} coordinates={coordinates} />}
    </div>
  )
}