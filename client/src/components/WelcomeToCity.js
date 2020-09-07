import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./LayoutMain.scss";
import "./WelcomeToCity.scss";

export default function WelcomeToCity(props) {
  const city = props.city;

  const params = [
    {
      name: props.city,
      coordinates: props.coordinates,
      language: props.language,
      cityId: props.city_id,
      userEmail: props.userEmail,
      userId: props.userId,
      userToken: props.userToken,
    },
  ];

  const [learn, setLearn] = useState(false);
  const [explore, setExplore] = useState(false);

  const goToLearn = () => {
    setLearn(params);
  };
  const goToExplore = () => {
    setExplore(params);
  };

  if (learn) {
    return (
      <Redirect
        push
        to={{
          pathname: "/learn",
          state: { learn },
        }}
      />
    );
  }

  if (explore) {
    return (
      <Redirect
        push
        to={{
          pathname: "/explore",
          state: { explore },
        }}
      />
    );
  }

  return (
    <div class="main-welcome-to-city">
      <section class="welcome-header">
        <span class="playlist-prompt">
          <div class="cloud">
          <img src="https://i.ibb.co/rQvvqHb/cloud-music-prompt.png" alt="cloud-music-prompt" border="0" width="300" />
      </div>
      </span>
      </section>
      <div class="welcome-body">
    <div class="city-box">
      <div class="city-box-content">
        <h1>Welcome to {city}</h1>
        <div class="city-buttons">
          <button class="alert alert-primary" type="button" onClick={goToLearn}>
            I want to learn
          </button>
          <button
            class="alert alert-primary"
            type="button"
            onClick={goToExplore}
          >
            I want to explore
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
