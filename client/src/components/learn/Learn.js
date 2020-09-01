import React from 'react'
import SpeechBubble from './SpeechBubble'



export default function Learn(props) {

  console.log('props', props)

  const city = props.location.state.learn[0].name
  const language = props.location.state.learn[0].language

  return (
    <section>
    <h1>you made it!</h1>
    <SpeechBubble language={language}/>
      
    </section>
  )
}
