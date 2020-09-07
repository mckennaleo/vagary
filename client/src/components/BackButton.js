import React from "react";
import history from 'browser-history';

import "./LayoutMain.scss"

export default function BackButton() {
    return (
      <div class="back-button-style">
      <button
<<<<<<< HEAD
        className="alert alert-primary explore-button"
=======
        className="button icon-left"
        class="btn btn-light"
>>>>>>> 72c2519a477e430c0156a685c4a410f9f7a1d81e
        onClick={(e) => {
          history(-1)
        }}
        >
      Go Back
      </button>
      </div>
    )
}