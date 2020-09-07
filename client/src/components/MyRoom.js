import React, { useState, useEffect } from "react";
import axios from "axios";
import { getQuizResultsByUserId } from "./helpers/selectors";

import PublicIcon from "@material-ui/icons/Public";
import "./LayoutMain.scss";
import "./MyRoom.scss";

export default function MyRoom({ userId }) {
  const [state, setState] = useState({
    quizzes: [],
    quizResults: [],
    quizQuestionCount: [],
    favourites: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/quizzes"),
      axios.get("/quiz_results"),
      axios.get("/quiz-questions-count"),
      axios.get("/favourites"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          quizzes: all[0].data,
          quizResults: all[1].data,
          quizQuestionCount: all[2].data,
          favourites: all[3].data,
        }));
      })
      .catch((err) => console.log(err.message));
  }, []);

  const userQuizResults = getQuizResultsByUserId(
    Number(userId),
    state.quizzes,
    state.quizResults
  );

  return (
    <div className="background--My-Room">
      <div class="main">
      <div class="card-deck">
      <div class="welcome-my-room">
          <div class="welcome-title"> 
          <img src="https://i.ibb.co/qWsPz62/cloud-purple-glow.png" alt="cloud-purple-glow" border="0"/>
          </div>
        {/* <div class="welcome-subtitle"> Time to rest and reflect. </div> */}
        </div>
        <div class="card-container">
        <div class="card text-white bg-dark mb-3 bg-transparent">
          {/* <img class="card-img-top" src="https://i.ibb.co/dJFTHNQ/profile-pic-copy.jpg" alt="profile-pic-copy" border="0"/> */}
          <div class="card-body">
            <h5 class="card-title">My Profile</h5>
            <a href='/edit'><p class="card-text">Click here to edit your profile</p></a>
          </div>
        </div>
        <div class="card text-white bg-dark mb-3 bg-transparent">
          {/* <img class="card-img-top" src="https://i.ibb.co/HxzMPN5/quiz-pic-copy.jpg" alt="quiz-pic-copy" border="0"/> */}
          <div class="card-body">
            <h5 class="card-title">My Quiz Scores</h5>
            <p class="card-sub-title-container">
            <p class="card-sub-title">Quiz</p>
            <p class="card-sub-title">Score</p>
            </p>
            <p class="card-text-container"> 
            {userQuizResults.map((result) => (
              <p class="card-text" key={result.id}>
                {result.quiz}
                </p>
            ))}
            {userQuizResults.map((result) => (
              <p class="card-text-result" key={result.id}>
                {result.result} out of 8
              </p>
            ))}
            </p>
          </div>
        </div>
        {/* <div class="card text-white bg-dark mb-3 bg-transparent">
          <img class="card-img-top" src="https://i.ibb.co/kh12Dhs/favourites-pic-copy.jpg" alt="favourites-pic-copy" border="0"/>
          <div class="card-body">
            <h5 class="card-title">My Favourites</h5>
            <p class="card-text">
            </p>
          </div>
        </div> */}
      </div>
      </div>
    </div>
    <a href="/" className="menu-item purple">
        <PublicIcon />
      </a>
    </div>
  );
}
