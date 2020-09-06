import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getTranslationQuestionsByCityId, quizValidator } from '../helpers/selectors';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "../SpeechBubble.scss";

export default function TranslationQuiz(props) {
  const language = props.location.state.translationQuiz[0].language
  const city = props.location.state.translationQuiz[0].name
  // const userId = props.location.state.translationQuiz[0].userId
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token')
  

  // console.log("????", userId)
  // console.log("WHAT ARE THESE", props)

  const [questions, setQuestions] = useState([])
  const [chosenAnswers, setChosenAnswers] = useState({});
  const [userQuizResult, setUserQuizResult] = useState(null)

  const handleChange = (questionId, answer) => {
    setChosenAnswers({...chosenAnswers, [questionId]: answer})
  };
  // console.log('USER ID ON TQUIZ', userId)
  // console.log('CITY ID ON TQUIZ', city)
  // console.log('LANGUAGE ID ON TQUIZ', language)
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
    console.log("THE QUESTIONS", questions)
    console.log("userQuizResult", userQuizResult)

  // handle submission to db
  const handleSubmit = (e) => {
    e.preventDefault()
    //
    if(!token) {
      alert("Please Login or create and Account to Submit a Quiz.")
    } else {
    // get correct quiz_id based on city name.
    let quizId = "";
    if (city === 'Istanbul') {
      quizId = 4
    } else if (city === 'Saigon') {
      quizId = 5
    }
    // console.log("CHOSEN ANSWERS!", chosenAnswers)
    const result = quizValidator(questions, chosenAnswers)
    // console.log("RESULTTTTT", result)
    setUserQuizResult(result)
    console.log("User Quiz Result ",userQuizResult)

    const resultToPost = {
      result: result,
      quiz_id: quizId,
      user_id: userId
    }

    console.log(resultToPost)
    axios.post("http://localhost:3001/quiz_results", {...resultToPost}, {headers: {"Authorization" : `Bearer ${token}`}})
      .then(results => {
        console.log(results)
      })
      .catch((err) => console.log(err.message));
    };


  }

  return (
    <section className={`background--${city}`}>
      <form id="quiz-form" onSubmit={handleSubmit}>
        <div className="choice--cards">
          <div><p>Hello, How Are you?</p></div>
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
      </div>
        <div className="submit-area">
          <input type="submit" variant="outlined" color="primary" className="alert alert-primary" value="Submit" />
        </div>


      </form>
    </section>
  )
}

