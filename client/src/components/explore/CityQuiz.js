import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCityQuestionsByCityId, quizValidator } from "../helpers/selectors";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../SpeechBubble.scss";
export default function CityQuiz(props) {
  const language = props.location.state.cityQuiz[0].language;
  const city = props.location.state.cityQuiz[0].name;
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [questions, setQuestions] = useState([]);
  const [chosenAnswers, setChosenAnswers] = useState({});
  const [userQuizResult, setUserQuizResult] = useState(null);

  const handleChange = (questionId, answer) => {
    setChosenAnswers({ ...chosenAnswers, [questionId]: answer });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `/quiz_questions`,
    })
      .then((results) => {
        console.log("results data", results.data, city);
        setQuestions(getCityQuestionsByCityId(results.data, city));
      })
      .catch((err) => console.log(err.message));
  }, []);

  // handle submission to db
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please Login or create and Account to Submit a Quiz.");
    } else {
      // get correct quiz_id based on city name.
      let quizId = "";
      if (city === "Istanbul") {
        quizId = 2;
      } else if (city === "Saigon") {
        quizId = 3;
      }

      const result = quizValidator(questions, chosenAnswers);
      setUserQuizResult(result.toFixed(0));

      console.log("User quiz result", userQuizResult);

      const resultToPost = {
        result: result,
        quiz_id: quizId,
        user_id: userId,
      };

      // console.log("results to post", resultToPost);
      axios
        .post(
          "http://localhost:3001/quiz_results",
          { ...resultToPost },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((results) => {
          //console.log(results);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <section className={`background--${city}`}>
      <form id="quiz-form" onSubmit={handleSubmit}>
        <div className="choice--cards">
          {questions.map((question, index) => {
            return (
              <FormControl component="fieldset">
                <FormLabel component="legend">{index + 1}. {question.question}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="answer-1"
                    control={<Radio />}
                    chosenAnswers={chosenAnswers}
                    onChange={() =>
                      handleChange(question.id, question.correct_answer)
                    }
                    label={question.correct_answer}
                  />
                  <FormControlLabel
                    value="answer-2"
                    control={<Radio />}
                    chosenAnswers={chosenAnswers}
                    onChange={() =>
                      handleChange(question.id, question.incorrect_answer_1)
                    }
                    label={question.incorrect_answer_1}
                  />
                  <FormControlLabel
                    value="answer-3"
                    control={<Radio />}
                    chosenAnswers={chosenAnswers}
                    onChange={() =>
                      handleChange(question.id, question.incorrect_answer_2)
                    }
                    label={question.incorrect_answer_2}
                  />
                  <FormControlLabel
                    value="answer-4"
                    control={<Radio />}
                    chosenAnswers={chosenAnswers}
                    onChange={() =>
                      handleChange(question.id, question.incorrect_answer_3)
                    }
                    label={question.incorrect_answer_3}
                  />
                </RadioGroup>
              </FormControl>
            );
          })}
        </div>
        {/* <div className="submit-area">
          <h1>City Knowledge Quiz</h1>
          <input
            type="submit"
            variant="outlined"
            color="primary"
            className="alert alert-primary"
            value="Submit"
          />
        </div> */}
        <div className="submit-area">
          <h1>City Quiz</h1>
          {userQuizResult ?
            <div><h4>Results: <h1>{userQuizResult}%</h1></h4>
              <h4>Correct Answers:</h4>
              <ol>
                {questions.map((question) => {
                  return (<li>{question.correct_answer}</li>)
                })}
              </ol>
            </div>
            : <input type="submit" variant="outlined" color="primary" className="alert alert-primary" value="Submit" />}
        </div>
      </form>
    </section>
  );
}
