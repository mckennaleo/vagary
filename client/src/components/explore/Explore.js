import React, { useEffect, useState } from "react";
import ExploreMap from "./ExploreMap";
import ExploreDisplay from "./ExploreDisplay";
import makeRequest from "../../hooks/travelApiData";

export default function Explore(props) {
  // assigns cityId, name and coordinates to be used later in an api request
  const cityId = props.location.state.explore[0].cityId;
  const city = props.location.state.explore[0].name;
  const coordinates = props.location.state.explore[0].coordinates;
  const [cityResults, setCityResults] = useState([]);

  // retrieves results of GET request to TravelAdvisor api
  useEffect(() => {
    makeRequest(cityId).then((result) => {
      // console.log(result)

      // initiates cityResult
      const cityResults = [];

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
      setCityResults(cityResults);
    });
  }, []);

  return (
    <div class="exploreCity">
      {
        <span>
          <ExploreMap
            city={city}
            coordinates={coordinates}
            cityId={cityId}
            cityResults={cityResults}
          />
        </span>
      }
      <span>
        <ExploreDisplay />
      </span>
    </div>
  );
}
