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
import MyRoom from "./components/MyRoom";

export default function App(props) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  //console.log("??????", props)

  useEffect(() => {
    //console.log(localStorage)
    const localUser = localStorage.getItem("email")
    const localToken = localStorage.getItem("token")
    const localId = localStorage.getItem("id")
    //console.log(localUser, localToken, userId)
    if (localUser && localToken && localId) {
      setUser(localUser)
      setToken(localToken)
      setUserId(localId)
    }
  },[])

  return (
    <Router>
      <div>
        <CircleMenu setUser={setUser} setToken={setToken}/>
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
            {userId && userId}
          </li>
        </ul>

        <Switch>
          <Route path="/sign-in" component={() =><SignIn setUser={setUser} setToken={setToken} setUserId={setUserId}/>} />
          <Route path="/sign-up" component={() =><SignUp setUser={setUser} setToken={setToken} setUserId={setUserId}/>} />
          <Route path="/my-room" component={() =><MyRoom user={user} token={token} userId={userId} />} />
          <Route path="/city" component={City}/>:
          {/*template literal with city name*/}
          <Route path="/learn" component={Learn} />
          <Route path="/explore" component={Explore} />
          <Route path="/quiz" component={TranslationQuiz} />
          <Route exact path="/" component={() =><Globe user={user} token={token} userId={userId}/>} />
        </Switch>
      </div>
    </Router>
  );
}

function City(props) {
  const city = props.location.state.city.marker.cityName;
  const coordinates = props.location.state.city.marker.coordinates;
  const language = props.location.state.city.marker.language;
  const city_id = props.location.state.city.marker.city_id;
  const userEmail = props.location.state.city.userData.user;
  const userId = props.location.state.city.userData.userId;
  const userToken = props.location.state.city.userData.token;

  //console.log("CITY PROPS", props)
  //console.log("userEmail, userId, userToken", userEmail, userId, userToken)

  return (
    <div className={`background--${city}`}>
      <h2>City</h2>
      <h1>I'm in {city}</h1>
      <WelcomeToCity
        city={city}
        coordinates={coordinates}
        language={language}
        city_id={city_id}
        userEmail={userEmail}
        userId={userId}
        userToken={userToken}
      />
    </div>
  );
}

