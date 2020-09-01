import React, { useEffect } from 'react';
import axios from 'axios'


export default function SpeechBubble(props) {

  const language = props.language
  console.log("LANGUAGE?", language)

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

    // Get translations from database

    const [phrases, setPhrases] = useState({})

    const setPhrases = phrases => setPhrases(prev => ({...prev, phrases }));

    useEffect(() => {
      axios.get("/translations")
    })
    .then(response => {
      setPhrases(response.data)
    })
    .catch(error => console.log(error))

    // axios
    // .get('/translations/2')
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => console.log(error));



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
    <section>
    <p>hello</p>
    <button type="button" onClick={ () =>{phraseTranslate(phrases[0], language)}}>{phrases[0]}</button>
    </section>
  )
}