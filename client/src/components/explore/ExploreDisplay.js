import React, { Component } from "react";
import makeRequest from "../../hooks/travelApiData";
import Youtube from "../../hooks/youtubeApiData";

export default function ExploreDisplay(props) {
  console.log(Youtube("Oaxaca Museum"))
    return (
      <article class="explore-display">
        <img src={props.display && props.display.photo} />
        <p>{props.display && props.display.name}</p>
        <div>{props.display && props.display.description}</div>
      </article>

    );
  
}
