import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import classNames from 'classnames';
import ExploreMap from "./explore/ExploreMap";
import Explore from "./explore/Explore";
import Learn from "./learn/Learn";
import "./LayoutMain.scss"

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
    }
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
    <div>
      <h1>Welcome to {city}</h1>
      <button class="alert alert-primary" type="button" onClick={goToLearn}>
        Go to Learn
      </button>
      <button type="button" onClick={goToExplore}>
        Go to Explore
      </button>
    </div>
  );
}