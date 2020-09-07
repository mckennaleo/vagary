import React from "react";
import history from 'browser-history';

import "./LayoutMain.scss"

export default function BackButton() {
    return (
      <div class="back-button-style">
      <button
        className="button icon-left"
        class="btn btn-light"
        onClick={(e) => {
          history(-1)
        }}
        >
      Go Back
      </button>
      </div>
    )
}