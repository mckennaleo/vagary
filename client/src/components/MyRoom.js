import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./LayoutMain.scss";
import { getQuizResultsByUserId } from "./helpers/selectors";

export default function MyRoom(props) {

  const [quizResults, setQuizResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  //request quiz_results & favourites
  useEffect(() => {
      Promise.all([
        axios.get("/quizzes"),
        axios.get("/quiz_results"),
        axios.get("/favourites")
      ])
      .then((all) => {
        setQuizzes(all[0].data)
        setQuizResults(all[1].data)
        setFavourites(all[2].data)
        // console.log("AXIOS", results.data)
      })
      .catch(err => console.log(err.message));
  }, []);
  // console.log(quizResults)
  // console.log(quizzes)
  const myCurrentQuizResults = getQuizResultsByUserId(Number(props.userId),quizzes,quizResults)
  console.log(myCurrentQuizResults)
  console.log(props)
  return (
    <div className="background--My-Room">
      <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    </div>
  )
}