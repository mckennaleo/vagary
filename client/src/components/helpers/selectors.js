const getPhrasesByCityId = (phrasesData, city) => {
  let theCity;
  if (city === "Istanbul") {
    theCity = 2;
  } else if (city === "Saigon") {
    theCity = 3;
  }
  return phrasesData.filter((item) => item.city_id === theCity);
};

const getTranslationQuestionsByCityId = (translationQuestionsData, city) => {
  let theQuestions;
  if (city === "Istanbul") {
    theQuestions = 4;
  } else if (city === "Saigon") {
    theQuestions = 5;
  }
  return translationQuestionsData.filter(
    (item) => item.quiz_id === theQuestions
  );
};

const getCityQuestionsByCityId = (cityQuestionsData, city) => {
  let theQuestions;
  if (city === "Istanbul") {
    theQuestions = 2;
  } else if (city === "Saigon") {
    theQuestions = 3;
  }
  return cityQuestionsData.filter((item) => item.quiz_id === theQuestions);
};

// takes a list of [questions] and {results}
const quizValidator = (q, a) => {
  let totalQuestions = q.length;
  let counter = 0;
  q.forEach((question) => {
    if (question.correct_answer === a[question.id]) {
      counter++;
    }
  });
  return (counter / totalQuestions) * 100;
};

// use when making axios request to backend quiz_results index to show in 'my room'
//invocate ie: getQuizResultsByUserId(2, quizData, resultsData)
const getQuizResultsByUserId = (userId, quizzes, results) => {
  let output = [];
  const filterResults = results.filter((result) => result.user_id === userId);
  for (const quiz of quizzes) {
    for (const result of filterResults) {
      if (result.quiz_id === quiz.id) {
        output.push({ quiz: quiz.name, result: result.result });
      }
    }
  }
  return output;
};

export {
  getPhrasesByCityId,
  getTranslationQuestionsByCityId,
  quizValidator,
  getQuizResultsByUserId,
  getCityQuestionsByCityId,
};
