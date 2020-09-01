import React from 'react';
import { Redirect } from 'react-router-dom';
import ExploreMap from './explore/ExploreMap'
import Explore from './explore/Explore'
import Learn from './learn/Learn'

export default function WelcomeToCity(props) {

  const city = props.city
  const coordinates = props.coordinates
  const language = props.language

  const [learnState, setLearnState] = useState(null);

  const goToLearn = () => {
    console.log("ARE WE HERE")
    // setLearnState = city // ??
      return (
        <fragment>
          <Redirect push to="/learn"/>
        </fragment>
      )
  };

  {/* need to take in props to get city name, conditional render background image based on city */}

   {/* make onclick listener, set state, redirect needs to be rendered (needs to be returned)  */}

  return(
    <div>
       {/* Placeholder for now - city background + buttons to redirect to Learn + Explore */}
       <button type="button" onClick={goToLearn} >Go to Learn</button>
       {/*<Explore city={city} coordinates={coordinates}/>*/}
    </div>
  )
}

// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   const history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }