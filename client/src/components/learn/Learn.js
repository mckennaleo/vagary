import React from 'react'
import axios from 'axios'



export default function Learn(props) {

  console.log('props', props)

  const city = props.location.state.learn[0].name
  const language = props.location.state.learn[0].language

  const phrases = [
    "Merhaba adın nedir?",
    "Merhaba, benim adım Ata.",
    "Nasılsın?",
    "Ben iyiyim teşekkür ederim.",
    "Bana yardım eder misiniz? Kayboldum.",
    "Elbette!",
    "Ayasofya'ya nasıl gidebilirim?",
    "Karşıdan karşıya geçerken sola dönün. Sultanahmet Camii'nin karşısında.",
    "Teşekkür ederim! Güle güle!",
    "Rica ederim. İyi günler!"
    ]


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
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  

  return (
    <fragment>
    <h1>you made it!</h1>
      <button type="button" onClick={ () =>{phraseTranslate(phrases[0], language)}}>{phrases[0]}</button>
    </fragment>
  )
}
