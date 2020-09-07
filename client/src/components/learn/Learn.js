import React from 'react';
import SpeechBubble from './SpeechBubble';
import BackButton from "../BackButton.js";



export default function Learn(props) {
  const city = props.location.state.learn[0].name
  const language = props.location.state.learn[0].language
  const userId = props.location.state.learn[0].userId

  return (
    <section className={`background--${city}`}>
    <div>
      <BackButton />
    </div>
    <SpeechBubble city={city} language={language} userId={userId} />
    </section>
  )
}

