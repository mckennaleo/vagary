import React, { Component, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Globe from './components/Globe';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import CurrentCity from './components/CurrentCity';
import axios from 'axios';
import './App.css';



export default function App() {

  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    axios.get('/experiences/1') // this is a test. can be removed.
      .then(res => setExperiences(res.data))
  }, [])


  return (
    <Router>
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
          <Route path="/city" component={City} /> {/*template literal with city name*/}
          <Route exact path="/" component={Globe} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Globe />;
  // return <h2>Login</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

function Account() {
  return <h2>My Account</h2>;
}



function City(props) {
  console.log(props);
  let city = props.location.state.city
  return (
    <div>
      <h2>City</h2>
      <CurrentCity
        city={city}
      />
      <Map />
    </div>
  );
}

function Experience() {
  let { cityId } = useParams();
  // return <h3>Requested experience ID: {experienceId}</h3>;
}


// The below code is just for testing pusposes and should be deleted before demo day!
// class App extends Component {
//   state = { users: [] };

//   componentDidMount() {
//     axios
//       .get('/api/users')
//       .then(response => {
//         console.log(response);
//         this.setState({
//           users: response.data,
//         });
//       })
//       .catch(error => console.log(error));
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



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
