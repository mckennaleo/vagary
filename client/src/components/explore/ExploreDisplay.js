import React, { Component } from "react";
import makeRequest from "../../hooks/travelApiData";

export default function ExploreDisplay(props) {
  console.log(props)
    return (
      <article>
        <img src={props.display && props.display.photo} />
        <p>{props.display && props.display.name}</p>
        <div class="landmarkDescription">{props.display && props.display.description}</div>
      </article>
    );
  
}
