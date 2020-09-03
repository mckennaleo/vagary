import React, { useEffect, useState } from "react";
import ExploreMap from "./ExploreMap";
import ExploreDisplay from "./ExploreDisplay";
import makeRequest from "../../hooks/travelApiData";
import Spotify from "../spotify/Spotify"

export default function Explore(props) {
  // assigns cityId, name and coordinates to be used later in an api request
  const cityId = props.location.state.explore[0].cityId;
  const city = props.location.state.explore[0].name;
  const coordinates = props.location.state.explore[0].coordinates;
  const [cityResults, setCityResults] = useState([]);
  const [display, setDisplay] = useState();
  

  // retrieves results of GET request to TravelAdvisor api
  useEffect(() => {
      const cityResults = [];
    makeRequest(cityId).then((result) => {
      console.log("RESULTSOIUGBL:IGUY")

      // initiates cityResult

      // loops through result arr of obj to get data
      for (let landmark of result) {
        
        // populates cityResults with data needed for pins on the city map
        cityResults.push({
          coordinates: [landmark.latitude, landmark.longitude],
          name: landmark.name,
          thumbnail: landmark.thumbnail,
          photo: landmark.photo,
          description: landmark.description,
        });
      }
      console.log("RESULT", result)
      setCityResults(cityResults);
    });
  }, []);

  return (
    <div className={`background--${city}`}>
    <div class="exploreCity">
      
     <span>
        <ExploreMap
          city={city}
          coordinates={coordinates}
          cityId={cityId}
          cityResults={cityResults}
          onSelect={setDisplay}
          class="explore-map"
        />
      </span>      
      <span>
        <ExploreDisplay 
          display={display}

        />
      </span>
    </div>
    </div>
  );
}
