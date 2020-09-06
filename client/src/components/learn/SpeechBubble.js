import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPhrasesByCityId } from "../helpers/selectors";
import { Redirect, Link } from "react-router-dom";
import "../SpeechBubble.scss";

export default function SpeechBubble(props) {
  const params = [
    {
      name: props.city,
      language: props.language,
      userId: props.userId
    },
  ];
  
  const language = props.language
  const city = props.city

  const [phrases, setPhrases] = useState([]);
  const [translation, setTranslation] = useState(null);
  const [translationQuiz, setTranslationQuiz] = useState(false);
  
  // Get translations from database
  useEffect(() => {
    axios({
      method: "GET",
      url: `/translations`,
    })
      .then((results) => {
        setPhrases(results.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  //API request to translate phrase to English on click
  const phraseTranslate = (phrase, lang) => {
    axios({
      method: "GET",
      url: "https://nlp-translation.p.rapidapi.com/v1/translate",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
        "x-rapidapi-key": "8678a05bc3msh6229c171ba7298cp1170c3jsn6cd41dde2894",
        useQueryString: true,
      },
      params: {
        from: lang,
        to: "en",
        text: phrase,
      },
    })
      .then((response) => {
        setTranslation(response.data.translated_text.en);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToTranslationQuiz = () => {
    // console.log(city)
    setTranslationQuiz(params);
  };

  if (translationQuiz) {
    return (
      <Redirect
        push
        to={{
          pathname: "/translationquiz",
          state: { translationQuiz },
        }}
      />
    );
  }

  return (
    <div id="speech-container">
      <section className="bubbles">
        {getPhrasesByCityId(phrases, city).map((phrase) => (
          <button
            className="speech-bubble"
            type="button"
            key={phrase.id}
            onClick={() => {
              translation
                ? setTranslation(null)
                : phraseTranslate(phrase.phrase, language);
            }}> 
            {phrase.phrase}
          </button>
        ))}
      </section>
      <section className="quiz-area">
        <h3>Translations</h3>
        {translation ? <p className="speech-bubble">{translation}</p> : null}
        <button type="button" className="alert alert-primary" onClick={goToTranslationQuiz}>
          Take Quiz!
        </button>
      </section>
    </div>
  );
}
