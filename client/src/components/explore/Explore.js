import React from 'react'
import ExploreMap from './ExploreMap'
import makeRequest from '../../hooks/travelApiData'

export default function Explore(props) {
  console.log("????", props)
  const cityId = props.location.state.explore[0].cityId  
  const city = props.location.state.explore[0].name
  const coordinates = props.location.state.explore[0].coordinates   
  makeRequest(cityId)
  .then(result => {
  console.log("RESULT", result)

  })
  

  return (
    <div>
      {<ExploreMap city={city} coordinates={coordinates} cityId={cityId}/>}
    </div>
  )
}