import React, { Component, useState } from "react";
import makeRequest from "../../hooks/travelApiData";
import Youtube from "../../hooks/youtubeApiData";
import ReactPlayer from "react-player";

export default function ExploreDisplay(props) {
  let videoURL = "";
  console.log("PROPS", props);
  const [videoId, setVideoId] = useState(null);
  if (props.display !== undefined) {
    Youtube(props.display.name).then((id) => {
      setVideoId(id);
    })};
  console.log("URL", videoURL)
    videoURL = 'https://www.youtube.com/watch?v=xWodT0rjw0Y'
    return (
      <article class="explore-display">
        <img src={props.display && props.display.photo} class="display-img"/>
        <p class="explore-title">{props.display && props.display.name}</p>
        <div class="explore-text">{props.display && props.display.description}</div>
        <div class="explore-player">
        <ReactPlayer 
          controls
          url={videoURL}
          className='react-player'
          playing
        />
        </div>
      </article>
   
    );
  
}
