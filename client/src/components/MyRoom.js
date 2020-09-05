import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getQuizResultsByUserId } from "./helpers/selectors"
import "./LayoutMain.scss";
export default function MyRoom(props) {
  const [quizResults, setQuizResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  
  
  //request quiz_results & favourites
  useEffect(() => {
      Promise.all([
        axios.get("/quiz_results"),
        axios.get("/favourites"),
        axios.get("/quizzes")
      ])
      .then(all => {
        setQuizResults(all[0].data),
        setFavourites(all[1].data),
        setQuizzes(all[2].data)
      })
      .catch(err => console.log(err.message));
  }, []);
  console.log("WHAT ARE THESE", props)
  console.log("quizzes", quizzes)
  console.log("favourites", favourites)
  console.log("quizResults", quizResults)
  console.log(getQuizResultsByUserId(props.userId, quizzes, quizResults))
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