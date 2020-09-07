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
        // console.log("FAVS: ", all[3].data);
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

  const favs = state.favourites;
  console.log("FAVS: ", favs);

  const userQuizResults = getQuizResultsByUserId(
    Number(userId),
    state.quizzes,
    state.quizResults
  );

  // const getFavs = favs.map((fav) => {
  //   return (
  //     (city = fav.city),
  //     (landmark = fav.landmark),
  //     (description = fav.description)
  //   );
  // city: fav.city,
  // landmark: fav.landmark,
  // description: fav.description
  // });

  return (
    <div className="background--My-Room">
      <div class="main">
        <div class="card-deck">
          <div class="welcome-my-room" />
          <div class="card-container">
            <div class="card text-white bg-dark mb-3 bg-transparent">
              <img
                class="card-img-top"
                src="https://i.ibb.co/dJFTHNQ/profile-pic-copy.jpg"
                alt="profile-pic-copy"
                border="0"
              />
              <div class="card-body">
                <h5 class="card-title">My Profile</h5>
                <a href="/">
                  <p class="card-text">Click here to edit your profile</p>
                </a>
              </div>
            </div>
            <div class="card text-white bg-dark mb-3 bg-transparent">
              <img
                class="card-img-top"
                src="https://i.ibb.co/HxzMPN5/quiz-pic-copy.jpg"
                alt="quiz-pic-copy"
                border="0"
              />
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
            <div class="card text-white bg-dark mb-3 bg-transparent">
              <img
                class="card-img-top"
                src="https://i.ibb.co/kh12Dhs/favourites-pic-copy.jpg"
                alt="favourites-pic-copy"
                border="0"
              />
              <div class="card-body">
                <h5 class="card-title">My Favourites</h5>
                <p class="card-sub-title-container">
                  <p class="card-sub-title">City</p>
                  <p class="card-sub-title">Landmark</p>
                  {/* <p class="card-sub-title">Description</p> */}
                </p>

                <p class="card-text-container">
                  {favs.map((fav) => (
                    <p class="card-text">{fav.city}</p>
                  ))}
                  {favs.map((fav) => (
                    <p class="card-text">{fav.landmark}</p>
                  ))}
                  {/* {favs.map((fav) => (
                    <p class="card-text">{fav.description}</p>
                  ))} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
