import React, { useState, useEffect } from "react";
import axios from "axios";
import { getQuizResultsByUserId } from "./helpers/selectors";
import "./LayoutMain.scss";

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

  console.log("WHAT IS THIS", state);
  console.log("QUIZZES???", state.quizzes);
  console.log("QUIZ RESULTS???", state.quizResults);
  console.log("QUIZ QUESTION COUNT???", state.quizQuestionCount);
  console.log("USERID??", userId);

  const userQuizResults = getQuizResultsByUserId(
    Number(userId),
    state.quizzes,
    state.quizResults
  );
  console.log(userQuizResults);

  return (
    <div className="background--My-Room">
      <div class="container">
        <div class="row">
          <div class="card w-50">
            <div class="card-body">
              <h5 class="card-title">My Profile</h5>
              <p class="card-text">Click here to edit your profile</p>
              <a href="#" class="btn btn-secondary">
                Edit
              </a>
            </div>
          </div>
          <div class="card w-50">
            <div class="card-body">
              <h5 class="card-title">My Language Quiz Results</h5>
              {userQuizResults.map((result) => (
                <p class="card-text" key={result.id}>
                  {result.quiz}: {result.result}/8
                </p> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
