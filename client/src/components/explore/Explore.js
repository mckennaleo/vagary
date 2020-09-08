import React, { useEffect, useState } from "react";
import ExploreMap from "./ExploreMap";
import ExploreDisplay from "./ExploreDisplay";
import { Redirect } from "react-router-dom";
import makeRequest from "../../hooks/travelApiData";
import BackButton from "../BackButton";
//import Spotify from "../spotify/Spotify";

export default function Explore(props) {
  // assigns cityId, name and coordinates to be used later in an api request
  // console.log("Explore props", props);
  const cityId = props.location.state.explore[0].cityId;
  const city = props.location.state.explore[0].name;
  const coordinates = props.location.state.explore[0].coordinates;
  const language = props.location.state.explore[0].language
  const [cityResults, setCityResults] = useState([]);
  const [display, setDisplay] = useState();
  const [cityQuiz, setCityQuiz] = useState(false);
  const cityParams = {
    name: city,
    language: language

  }
console.log("STATE", props.location)
  // retrieves results of GET request to TravelAdvisor api
  useEffect(() => {
    const cityResults = [];
    makeRequest(cityId).then((result) => {
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
      setCityResults(cityResults);
    });
  }, []);

  const goToCityQuiz = () => {
    // console.log(city)
    setCityQuiz(cityParams);
  };
  if (cityQuiz) {
    return (
      <Redirect
        cityParams={cityParams}
        push
        to={{
          pathname: "/cityquiz",
          state: { cityQuiz },
        }}
      />
    );
  }

  return (
    <div className={`background--${city}`}>
      <div class="explore-menu">
        <article>
          <BackButton class="alert alert-primary explore-button" />
        </article>
        <button
          type="button"
          cityParams={cityParams}
          onClick={goToCityQuiz}
          class="alert alert-primary explore-button"          
        >
          Take City Knowledge Quiz!
        </button>
      </div>
      <div class="explore-city">
        <span class="explore-map-container">
          <ExploreMap
            city={city}
            coordinates={coordinates}
            cityId={cityId}
            cityResults={cityResults}
            onSelect={setDisplay}
            
          />
        </span>
        <span>
          <ExploreDisplay city={city} display={display} />
        </span>
      </div>
    </div>
  );
}
