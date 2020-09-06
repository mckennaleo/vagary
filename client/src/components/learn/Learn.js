import React from 'react'
import SpeechBubble from './SpeechBubble'



export default function Learn(props) {
  const city = props.location.state.learn[0].name
  const language = props.location.state.learn[0].language
  const userId = props.location.state.learn[0].userId

  return (
    <section className={`background--${city}`}>
    <SpeechBubble city={city} language={language} userId={userId} />
    </section>
  )
}

