import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getTranslationQuestionsByCityId, quizValidator } from '../helpers/selectors';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function TranslationQuiz(props) {

  console.log("C QUOI", props)
  const language = props.location.state.translationQuiz[0].language
  const city = props.location.state.translationQuiz[0].name
  const userId = Number(props.location.state.translationQuiz[0].userId)
  console.log('USER ID', userId)

  const [questions, setQuestions] = useState([])
  const [chosenAnswers, setChosenAnswers] = useState({});
  const [userQuizResult, setUserQuizResult] = useState(null)

  const handleChange = (questionId, answer) => {
    setChosenAnswers({ ...chosenAnswers, [questionId]: answer })
  };

  // Get translations from database
  useEffect(() => {
    axios({
      method: "GET",
      url: `/quiz_questions`
    })
      .then(results => {
        console.log(results.data)
        setQuestions(getTranslationQuestionsByCityId(results.data, city))
      })
      .catch(err => console.log(err.message));
  }, []);

  //if user is logged in
  //make post request to /quiz_results with result + quiz_id
  console.log("userQuizResult", userQuizResult)

  // handle submission to db
  const handleSubmit = (e) => {
    e.preventDefault()

    const result = quizValidator(questions, chosenAnswers)
    setUserQuizResult(result)
    console.log(userQuizResult)

    const resultToPost = {
      result: result,
      quiz_id: 4,
      user_id: userId
    }

    console.log(resultToPost)
    axios.post("http://localhost:3001/quiz_results", resultToPost)
      .then(results => {
        console.log(results)
      })

  }

  return (
    <section>
      <form id="quiz-form" onSubmit={handleSubmit}>
        {questions.map((question) => {
          return (
            <FormControl component="fieldset">
              <FormLabel component="legend">{question.question}</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" >
                <FormControlLabel value="answer-1" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.correct_answer)} label={question.correct_answer} />
                <FormControlLabel value="answer-2" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.incorrect_answer_1)} label={question.incorrect_answer_1} />
                <FormControlLabel value="answer-3" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.incorrect_answer_2)} label={question.incorrect_answer_2} />
                <FormControlLabel value="answer-4" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.incorrect_answer_3)} label={question.incorrect_answer_3} />
              </RadioGroup>
            </FormControl>
          )
        })
        }
        <input type="submit" variant="outlined" color="primary" className='' value="Submit" />


      </form>
    </section>
  )
}

