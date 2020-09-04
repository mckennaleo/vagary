import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Globe from "./components/Globe";
import "leaflet/dist/leaflet.css";
import "./App.css";
import "./components/LayoutMain.scss";
import WelcomeToCity from "./components/WelcomeToCity";
import CircleMenu from "./components/CircleMenu";
import Learn from "./components/learn/Learn";
import Explore from "./components/explore/Explore";
import TranslationQuiz from "./components/learn/TranslationQuiz";
import Spotify from "./components/spotify/Spotify";

export default function App(props) {
  const [city, setCity] = useState(null);

  return (
    <Router>
      <div>
        <CircleMenu />
      </div>
      <div class="spotify">
        <Spotify city={city} />
      </div>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/city" component={City} />{" "}
          {/*template literal with city name*/}
          <Route path="/learn" component={Learn} />
          <Route path="/explore" component={Explore} />
          <Route path="/quiz" component={TranslationQuiz} />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <Globe {...routeProps} city={city} setCity={setCity} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );

  function Login() {
    return <h2>Login</h2>;
  }

  function Register() {
    return <h2>Register</h2>;
  }

  function Account() {
    return <h2>My Account</h2>;
  }
}

function City(props) {
  console.log("PROPS", props);
  const city = props.location.state.city.marker.cityName;
  const coordinates = props.location.state.city.marker.coordinates;
  const language = props.location.state.city.marker.language;
  const city_id = props.location.state.city.marker.city_id;
  const background = props.location.state.city.marker.background;
  // console.log("CITY", city);
  // console.log("PROPS", props);
  // console.log("BACKGROUND", background);
  return (
    <div className={`background--${city}`}>
      {/* <div class="spotify">
        <Spotify city={city} />
      </div> */}
      <h2>City</h2>
      <h1>I'm in {city}</h1>
      <WelcomeToCity
        city={city}
        coordinates={coordinates}
        language={language}
        city_id={city_id}
        background={background}
      />
    </div>
  );
}
