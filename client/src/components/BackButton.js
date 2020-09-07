import React from "react";
import history from 'browser-history';

import "./LayoutMain.scss"

export default function BackButton() {
    return (
      <div class="back-button-style">
      <button
        className="alert alert-primary explore-button"
        onClick={(e) => {
          history(-1)
        }}
        >
      Go Back
      </button>
      </div>
    )
}