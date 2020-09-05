import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getQuizResultsByUserId } from "./helpers/selectors"
import "./LayoutMain.scss";

export default function MyRoom(props) {
  const [quizResults, setQuizResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const resultsData = [
    {
      "id": 1,
      "result": 7,
      "created_at": "2020-09-04T15:16:24.619Z",
      "updated_at": "2020-09-04T15:16:24.619Z",
      "quiz_id": 5,
      "user_id": 1
    },
    {
      "id": 2,
      "result": 5,
      "created_at": "2020-09-04T15:16:24.623Z",
      "updated_at": "2020-09-04T15:16:24.623Z",
      "quiz_id": 4,
      "user_id": 1
    },
    {
      "id": 3,
      "result": 3,
      "created_at": "2020-09-04T15:16:24.626Z",
      "updated_at": "2020-09-04T15:16:24.626Z",
      "quiz_id": 4,
      "user_id": 2
    }
  ]

  const quizData = [
    {
      "id": 1,
      "name": "Oaxaca Quiz!",
      "created_at": "2020-09-04T15:16:24.399Z",
      "updated_at": "2020-09-04T15:16:24.399Z",
      "city_id": 1
    },
    {
      "id": 2,
      "name": "How Well Do You Know Istanbul?",
      "created_at": "2020-09-04T15:16:24.404Z",
      "updated_at": "2020-09-04T15:16:24.404Z",
      "city_id": 2
    },
    {
      "id": 3,
      "name": "How Well Do You Know Saigon?",
      "created_at": "2020-09-04T15:16:24.407Z",
      "updated_at": "2020-09-04T15:16:24.407Z",
      "city_id": 3
    },
    {
      "id": 4,
      "name": "How Well Can You Speak Turkish?",
      "created_at": "2020-09-04T15:16:24.530Z",
      "updated_at": "2020-09-04T15:16:24.530Z",
      "city_id": 2
    },
    {
      "id": 5,
      "name": "How Well Can You Speak Vietnamese?",
      "created_at": "2020-09-04T15:16:24.533Z",
      "updated_at": "2020-09-04T15:16:24.533Z",
      "city_id": 3
    }
  ]

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