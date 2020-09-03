import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Globe from "./components/Globe";
import "leaflet/dist/leaflet.css";
import "./App.css";
import "./components/LayoutMain.scss"
import WelcomeToCity from "./components/WelcomeToCity";
import CircleMenu from "./components/CircleMenu";
import Learn from "./components/learn/Learn";
import Explore from "./components/explore/Explore";
import TranslationQuiz from "./components/learn/TranslationQuiz";

export default function App() {
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
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/city">City</Link> {/*template literal with city name*/}
          </li>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
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

function Login() {
  // request for token from backend
  axios.create({
    baseURL: '/api/users',
    headers: {
      // Authorization: {put your token here}
    }
  })

  return <h2>Login</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

function Account() {
  return <h2>My Account</h2>;
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

// The below code is just for testing pusposes and should be deleted before demo day!
// class App extends Component {
//   state = { users: [] };

//   componentDidMount() {
// axios
//   .get('/api/users')
//   .then(response => {
//     console.log(response);
//     this.setState({
//       users: response.data,
//     });
//   })
//   .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>Users</h1>
//         {this.state.users.map(user => (
//           <div key={user.id}>
//             {user.name} {user.email}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
