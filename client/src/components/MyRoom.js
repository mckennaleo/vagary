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
      <h1>My Room</h1>
    </div>
  )
}