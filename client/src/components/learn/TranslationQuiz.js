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

  const [questions, setQuestions] = useState([])
  const [chosenAnswers, setChosenAnswers] = useState({});
  const [quizResult, setQuizResult] = useState({})

  const handleChange = (questionId, answer) => {
    // debugger
    setChosenAnswers({...chosenAnswers})
  };

  // Get translations from database
  useEffect(() => {
    axios({
      method: "GET",
      url: `/quiz_questions`
    })
      .then(results => {
        //console.log(results.data)
        setQuestions(getTranslationQuestionsByCityId(results.data, city))
      })
      .catch(err => console.log(err.message));
  }, []);

  //if user is logged in
  //make post request to /quiz_results with result + quiz_id

  console.log("quizResult", quizResult)

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
      <Button type="button" variant="outlined" color="primary" className='' onClick={() => setQuizResult(quizValidator(questions, chosenAnswers))}>
            Submit
      </Button>

        

      </FormControl>
    </section>
   
  )
}

