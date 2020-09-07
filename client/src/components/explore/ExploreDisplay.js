import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Youtube from "../../hooks/youtubeApiData";
import ReactPlayer from "react-player";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

import "../Explore.scss";


export default function ExploreDisplay(props) {
  const userId = localStorage.getItem("userId");
  const city = props.city;
  const language = props.language;
  const token = localStorage.getItem("token");
  const [videoId, setVideoId] = useState(null);
  const [cityQuiz, setCityQuiz] = useState(false);
  const cityParams = [
    {
      name: city,
      language: language,
    },
  ];

  let videoURL = "";
  console.log("PROPS", props);

  useEffect(() => {
    console.log("FIRING");
    if (props.display !== undefined) {
      Youtube(props.display.name).then((id) => {
        setVideoId(id);
      });
    }
  }, [videoId, props.display]);
  videoURL = `https://www.youtube.com/watch?v=${videoId}`;

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

  // handle submission to db
  const addFavourite = (e) => {
    const landmark = props.display.name;
    const description = props.display.description;
    if (props.display !== undefined) {
      e.preventDefault();

      if (!token) {
        alert("Please login or create an account to save a landmark.");
      } else {
        const favourite = {
          city: city,
          landmark: landmark,
          description: description,
          user_id: userId,
        };

        axios
          .post(
            "http://localhost:3001/favourites",
            { ...favourite }
            // { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((results) => {
            console.log("CITY: ", city);
            console.log("NAME: ", landmark);
            console.log("DESCR: ", description);
            console.log("USER: ", userId);
            console.log("RESULTS: ", results);
          })
          .catch((err) => console.log(err.message));
      }
    }
  };

  return (
    <article class="explore-display">
      <div class="display-img-container">
        <img src={props.display && props.display.photo} class="display-img" />
      </div>
      <div>
        <p class="explore-title">
          <strong>{props.display && props.display.name}</strong>
        </p>
        <Tooltip title="Add to Favourites" placement="right">
          <FavoriteIcon id="fave" onClick={addFavourite} />
        </Tooltip>
      </div>
      <div class="explore-text">
        {props.display && props.display.description}
      </div>
      <div>
        <button
          type="button"
          cityParams={cityParams}
          onClick={goToCityQuiz}
          class="alert alert-primary"
        >
          Take City Knowledge Quiz!
        </button>
      </div>
      <div class="explore-player" id="explore-player">
        <ReactPlayer
          controls
          url={videoURL}
          className="react-player "
          playing
        />
      </div>
    </article>
  );
}
