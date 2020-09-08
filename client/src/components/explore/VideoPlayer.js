import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import "../Explore.scss";
 
export default class VideoPlayer extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div class="explore-page-container">
      <div class="explore-display">
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </div>
      </div>
    )
  }
}
