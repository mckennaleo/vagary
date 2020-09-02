import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getTranslationQuestionsByCityId } from '../helpers/selectors';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function TranslationQuiz(props) {

  console.log("C QUOI", props)
  const language = props.location.state.translationQuiz[0].language
  const city = props.location.state.translationQuiz[0].name

  const [questions, setQuestions] = useState([])

  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
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


  console.log("did it work", questions)

// correct_answer: "Xin chào", incorrect_answer_1
  return (

    <section>
      {questions.map((question) => {
        return (<FormControl component="fieldset">
            <FormLabel component="legend">{question.question}</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="answer-1" control={<Radio />} label={question.correct_answer} />
              <FormControlLabel value="answer-2" control={<Radio />} label={question.incorrect_answer_1} />
              <FormControlLabel value="answer-3" control={<Radio />} label={question.incorrect_answer_2} />
              <FormControlLabel value="answer-4" control={<Radio />} label={question.incorrect_answer_3} />
            </RadioGroup>
          </FormControl>)
    })}
    </section>

  )
}

