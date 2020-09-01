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

  return (
    <section>
    <h1>you made it!</h1>
      
    </section>
  )
}
