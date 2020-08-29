import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link> {/*globe*/}
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/city"> {/*template literal with city name*/}
            <City />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
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

function City() {
  let match = useRouteMatch();

//   return (
//     <div>
//       <h2>City</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/welcome`}>Welcome</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/learn`}>
//             Learn
//           </Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/explore`}>
//             Explore
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:experienceId`}>
//           <Experience />
//         </Route>
//         <Route path={match.path}>
//           <h3>Choose an experience!</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Experience() {
//   let { cityId } = useParams();
//   return <h3>Requested experience ID: {experienceId}</h3>;
// }


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
