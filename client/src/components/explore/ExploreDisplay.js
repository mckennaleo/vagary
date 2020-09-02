import React, { Component, useState } from "react";
import makeRequest from "../../hooks/travelApiData";
import Youtube from "../../hooks/youtubeApiData";
import ReactPlayer from 'react-player'

export default function ExploreDisplay(props) {
  let videoURL = ''
  console.log("PROPS", props)
  const [videoId, setVideoId] = useState(null);
  if (props.display !== undefined) {
    Youtube(props.display.name)
    .then(id => {
      setVideoId(id);
    videoURL = 'https://www.youtube.com/watch?v=' + videoId
    })};
  console.log("URL", videoURL)
    return (
      <article class="explore-display">
        <img src={props.display && props.display.photo} />
        <p>{props.display && props.display.name}</p>
        <div>{props.display && props.display.description}</div>
        <ReactPlayer controls
        url={videoURL}
        />
        
    
      </article>
   
    );
  
}


