import React, { Component } from "react";
import makeRequest from "../../hooks/travelApiData";

export default class ExploreDisplay extends React.Component {
  render() {
    return (
      <article>
        <div class="landmarkDescription">this is my description</div>
        <div class="landmarkPhoto">this is my image</div>
      </article>
    );
  }
}
