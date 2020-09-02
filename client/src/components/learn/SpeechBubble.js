import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getPhrasesByCityId } from '../helpers/selectors'

export default function SpeechBubble(props) {

  const language = props.language
  const city = props.city

  const [phrases, setPhrases] = useState([])

  // Get translations from database
  useEffect(() => {
    axios({
      method: "GET",
      url: `/translations`
    })
      .then(results => {
        console.log(results.data)
        setPhrases(results.data)
      })
      .catch(err => console.log(err.message));
  }, []);

  

  const phraseTranslate = (phrase, lang) => {
    // console.log("button clicked")
    axios({
      "method":"GET",
      "url":"https://nlp-translation.p.rapidapi.com/v1/translate",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"nlp-translation.p.rapidapi.com",
      "x-rapidapi-key":"8678a05bc3msh6229c171ba7298cp1170c3jsn6cd41dde2894",
      "useQueryString":true
      },"params":{
      "from":lang,
      "to":"en",
      "text": phrase
      }
      })
      .then((response)=>{
        console.log(response.data.translated_text.en)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <section>
      {getPhrasesByCityId(phrases, city).map((phrase) => <button type="button" onClick={ () =>{phraseTranslate(phrase.phrase, language)}}>{phrase.phrase}</button>)}
    </section>
  )
}