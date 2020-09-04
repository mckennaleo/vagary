import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./LayoutMain.scss";

export default function MyRoom(props) {

  const [quizResults, setQuizResults] = useState(null);
  const [favourites, setFavourites] = useState(null);

  //request quiz_results & favourites
  useEffect(() => {
      Promise.all([
        axios.get("/quiz_results"),
        axios.get("/quizzes"),
        axios.get("/favourites"),
      ])
      .then(results => {
        console.log("AXIOS", results.data)
      })
      .catch(err => console.log(err.message));
  }, []);

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