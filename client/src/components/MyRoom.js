import React, { useState, useEffect } from "react";
import axios from "axios";
import { getQuizResultsByUserId } from "./helpers/selectors";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
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
  const favs = state.favourites;
  // console.log("FAVS: ", favs);
  const userQuizResults = getQuizResultsByUserId(
    Number(userId),
    state.quizzes,
    state.quizResults
  );

  const deleteFav = (id, e) => {
    axios
      .delete(`/favourites/${id}`)
      .then((response) => {
        console.log("DELETE RES: ", response);
        console.log("DELETE DATA: ", response.data);
        console.log("STATE FAVS[0]: ", state.favourites[0]);
        const favourites = state.favourites.filter((fav) => fav.id !== id);
        setState((prev) => ({ ...prev, favourites }));
      })
      .catch((err) => console.log("ERROR: ", err.message));
  };

  return (
    <div className="background--My-Room">
      <div class="main">
        <div class="card-deck">
          <div class="welcome-my-room">
            <div class="welcome-my-room-title"></div>
          </div>
          <div class="card-container">
            <div class="card-profile">
              <div class="card-title">profile</div>
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  href="/edit"
                >
                  edit
                </button>
              </div>
            </div>
            <div class="card-quiz">
              <div class="card-title">quiz scores</div>
              <div class="card-body">
                <div class="main-quiz-table">
                  <table class="table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        {userQuizResults.map((result) => (
                          <tr key={result.id}>
                            <td class="card-text">{result.quiz}</td>{" "}
                            <td class="card-text-result">{result.result}%</td>
                          </tr>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card-favourite">
              <div class="card-title">favourites</div>
              <div class="card-body">
                <table class="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      {favs.map((fav) => (
                        <tr>
                          <td class="card-text">
                            {fav.landmark}({fav.city})
                            <span id="deleteBtn">
                              <span>
                                <DeleteIcon
                                  onClick={(e) => deleteFav(fav.id, e)}
                                />
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
