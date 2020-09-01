import React, {useEffect, useState} from 'react'
import ExploreMap from './ExploreMap'
import makeRequest from '../../hooks/travelApiData'

export default function Explore(props) {
  // console.log("????", props)
  // assigns cityId, name and coordinates to be used later in an api request
  const cityId = props.location.state.explore[0].cityId;
  const city = props.location.state.explore[0].name;
  const coordinates = props.location.state.explore[0].coordinates;
  const [cityResults, setCityResults] = useState([]);
  // GET request to TravelAdvisor api
  useEffect(() => {
    makeRequest(cityId)
      .then(result => {
      // console.log(result)
      const cityResults = []
      for (let landmark of result) {
        // populates cityResults with data needed for pins on the city map
        cityResults.push({
          coordinates: [landmark.latitude, landmark.longitude],
          name: landmark.name,
          thumbnail: landmark.thumbnail
        })
      } 
      setCityResults(cityResults);
      })
  }, [])
  
  

  return (
    <div>
      {<ExploreMap city={city} coordinates={coordinates} cityId={cityId} cityResults={cityResults}/>}
    </div>
  )
}

