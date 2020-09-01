import React from 'react'
import makeRequest from '../../hooks/travelApiData'
import ExploreMap from './ExploreMap'

export default function Explore(props) {
  console.log("????", props)
  const cityId = props.location.state.explore[0].cityId  
  const city = props.location.state.explore[0].name
  const coordinates = props.location.state.explore[0].coordinates   
  console.log("CITYID", cityId)
  makeRequest(cityId)
  return (
    <div>
      {<ExploreMap city={city} coordinates={coordinates} />}
    </div>
  )
}