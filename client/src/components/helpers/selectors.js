
const getPhrasesByCityId = (phrasesData, city) => {
  let theCity;
  if (city === 'Istanbul') {
    theCity = 2
  } else if (city === 'Saigon') {
    theCity = 3
  }
  return phrasesData.filter(item => item.city_id === theCity)

}

const getTranslationQuestionsByCityId = (translationQuestionsData, city) => {
  let theQuestions;
  if (city === 'Istanbul') {
    theQuestions = 4
  } else if (city === 'Saigon') {
    theQuestions = 5
  }
  return translationQuestionsData.filter(item => item.quiz_id === theQuestions)
}

const quizValidator = (q, a) => {
  let ans = Object.values(a)
  let counter = 0;
  q.forEach((question, index) => {
    if (ans[index] === question.correct_answer ){
      counter ++
    } else {
      //console.log('wrong answer', ans[index])
    }
  })
    console.log(counter)
    return counter
  }
 

export { getPhrasesByCityId, getTranslationQuestionsByCityId, quizValidator };

