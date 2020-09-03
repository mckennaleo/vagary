import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Globe from "./components/Globe";
import "leaflet/dist/leaflet.css";
import "./App.css";
import "./components/LayoutMain.scss"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import WelcomeToCity from "./components/WelcomeToCity";
import CircleMenu from "./components/CircleMenu";
import Learn from "./components/learn/Learn";
import Explore from "./components/explore/Explore";
import TranslationQuiz from "./components/learn/TranslationQuiz";

export default function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    console.log(localStorage)
    const localUser = localStorage.getItem("email")
    const localToken = localStorage.getItem("token")
    console.log(localUser, localToken)
    if (localUser && localToken) {
      setUser(localUser)
      setToken(localToken)
    }
  },[])

  return (
    <Router>
      <div>
        <CircleMenu />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Globe</Link> {/*globe*/}
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/my-room">My Room</Link>
          </li>
          <li>
            <Link to="/city">City</Link> {/*template literal with city name*/}
          </li>
          <li>
            {token && token}
            {user && user}
          </li>
        </ul>

        <Switch>
          <Route path="/sign-in" component={() =><SignIn setUser={setUser} setToken={setToken}/>} />
          <Route path="/sign-up" component={() =><SignUp setUser={setUser} setToken={setToken}/>} />
          <Route path="/my-room" />
          <Route path="/city" component={City} />{" "}
          {/*template literal with city name*/}
          <Route path="/learn" component={Learn} />
          <Route path="/explore" component={Explore} />
          <Route path="/quiz" component={TranslationQuiz} />
          <Route exact path="/" component={Globe} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Globe />;
}

function City(props) {
  //console.log(props);
  const city = props.location.state.city.marker.cityName;
  const coordinates = props.location.state.city.marker.coordinates;
  const language = props.location.state.city.marker.language;
  const city_id = props.location.state.city.marker.city_id;
  
  return (
    <div className={`background--${city}`}>
      <h2>City</h2>
      <h1>I'm in {city}</h1>
      <WelcomeToCity
        city={city}
        coordinates={coordinates}
        language={language}
        city_id={city_id}
      />
    </div>
  );
}

