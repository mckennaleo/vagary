import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./LayoutMain.scss";

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
    <div class="city-box">
      <div class="city-box-content">
        <h1>Welcome to {city}</h1>
        <article class="city-buttons">
          <button class="alert alert-primary" type="button" onClick={goToLearn}>
            Go to Learn
          </button>
          <button class="alert alert-primary" type="button" onClick={goToExplore}>
            Go to Explore
          </button>
        </article>
      </div>
      </div>
    </div>
  );
}
