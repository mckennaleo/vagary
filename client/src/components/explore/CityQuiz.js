import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getCityQuestionsByCityId, quizValidator } from '../helpers/selectors';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function CityQuiz(props) {

  console.log("C QUOI", props)
  const language = props.location.state.cityQuiz[0].language
  const city = props.location.state.cityQuiz[0].name

  const [questions, setQuestions] = useState([])
  const [chosenAnswers, setChosenAnswers] = useState({});
  const [] = useState({})

  const handleChange = (questionId, answer) => {
    // debugger
    setChosenAnswers({...chosenAnswers, [questionId]: answer})
  };

  // Get translations from database
  useEffect(() => {
    axios({
      method: "GET",
      url: `/quiz_questions`
    })
      .then(results => {
        console.log("results data", results.data, city)
        setQuestions(getCityQuestionsByCityId(results.data, city))
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <section>
      {questions.map((question) => {
        return (<FormControl component="fieldset">
            <FormLabel component="legend">{question.question}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" >
              <FormControlLabel value="answer-1" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.correct_answer)} label={question.correct_answer} />
              <FormControlLabel value="answer-2" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.incorrect_answer_1)} label={question.incorrect_answer_1} />
              <FormControlLabel value="answer-3" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.incorrect_answer_2)} label={question.incorrect_answer_2} />
              <FormControlLabel value="answer-4" control={<Radio />} chosenAnswers={chosenAnswers} onChange={() => handleChange(question.id, question.incorrect_answer_3)} label={question.incorrect_answer_3} />
            </RadioGroup>
          </FormControl>
          )
    })}
    <FormControl>
     <Button type="button" variant="outlined" color="primary" className='' onClick={() => quizValidator(questions, chosenAnswers)}>
          Submit
      </Button>
    </FormControl>
    </section>

  )
}

