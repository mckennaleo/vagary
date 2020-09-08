import React from "react";
import history from 'browser-history';

import "./LayoutMain.scss"

export default function BackButton() {
    return (
      <button
       class="alert alert-primary explore-button"
        onClick={(e) => {
          history(-1)
        }}
        >
      Go Back
      </button>
    )
}