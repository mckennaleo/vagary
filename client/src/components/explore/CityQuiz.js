import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCityQuestionsByCityId, quizValidator } from "../helpers/selectors";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../SpeechBubble.scss";
import BackButton from "../BackButton.js";

export default function CityQuiz(props) {
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

      const resultToPost = {
        result: result,
        quiz_id: quizId,
        user_id: userId,
      };

      axios
        .post(
          "http://localhost:3001/quiz_results",
          { ...resultToPost },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((results) => {})
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <section className={`background--${city}`}>
      <BackButton />
      <form id="quiz-form" onSubmit={handleSubmit}>
        <div className="choice--cards">
          {questions.map((question, index) => {
            return (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  {index + 1}. {question.question}
                </FormLabel>
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
        <div className="submit-area">
          <div class="quiz-button-header">Test your knowledge</div>
          {userQuizResult ? (
            <div>
              <h4>
                Results: <h1>{userQuizResult}%</h1>
              </h4>
              <h4>Cheat sheet</h4>
              <ol>
                {questions.map((question) => {
                  return <li>{question.correct_answer}</li>;
                })}
              </ol>
            </div>
          ) : (
            <input
              type="submit"
              variant="outlined"
              color="primary"
              className="alert alert-primary"
              value="Submit"
            />
          )}
        </div>
      </form>
    </section>
  );
}
