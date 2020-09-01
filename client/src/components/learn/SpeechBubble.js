import React from 'react';


export default function SpeechBubble() {

  const phraseTranslate = (phrase, lang) => {
    console.log("button clicked")
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
    <p>hello</p>
    <button type="button" onClick={ () =>{phraseTranslate(phrases[0], language)}}>{phrases[0]}</button>
  )
}