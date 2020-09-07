import React , { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
const history = require('browser-history')

export default class BackButton extends Component {
  render() {
    return (
      <button
        className="alert alert-primary explore-button"
        onClick={(e) => {
          history(-1)
        }}
        >

      Go Back

      </button>
    )
  }
}