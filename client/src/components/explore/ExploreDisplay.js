import React, { Component, useState, useEffect } from "react";
import makeRequest from "../../hooks/travelApiData";
import Youtube from "../../hooks/youtubeApiData";
import ReactPlayer from "react-player";
import { Redirect } from "react-router-dom";

export default function ExploreDisplay(props) {
  const [videoId, setVideoId] = useState(null);
  const [cityQuiz, setCityQuiz] = useState(false);
  const cityParams = [
    {
      name: props.city,
      language: props.language,
    },
  ];
  const city = props.city;

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
  console.log("PROPS", props);

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
    <article class="explore-display">
      <img src={props.display && props.display.photo} class="display-img" />
      <p class="explore-title">{props.display && props.display.name}</p>
      <div class="explore-text">
        {props.display && props.display.description}
      </div>
      <button type="button" cityParams={cityParams} onClick={goToCityQuiz}>
        Take City Knowledge Quiz!
      </button>
      <div class="explore-player">
        <ReactPlayer controls url={videoURL} className="react-player" playing />
      </div>
    </article>
  );
}
