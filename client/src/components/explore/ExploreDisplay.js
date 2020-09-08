import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import Youtube from "../../hooks/youtubeApiData";
import ReactPlayer from "react-player";
import axios from "axios";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

import "../Explore.scss";
import "../SpeechBubble.scss";
import "../../App.css";

export default function ExploreDisplay(props) {
  const userId = localStorage.getItem("userId");
  const city = props.city;
  const token = localStorage.getItem("token");
  const [videoId, setVideoId] = useState(null);

  let videoURL = "";
  console.log("VIDEO ID", videoId);

  class VideoPlayer extends React.Component {
    constructor() {
      super();
      this.state = {
        isOpen: false,
      };
      this.openModal = this.openModal.bind(this);
    }

    openModal() {
      this.setState({ isOpen: true });
    }

    render() {
      return (
        <div class="explore-display">
        <div class="explore-player-container">
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={videoId}
            onClose={() => this.setState({ isOpen: false })}
            width={1000}
          />
          <button
            class="alert alert-primary explore-button"
            onClick={this.openModal}
          >
            Take a video tour
          </button>
        </div>
        </div>
      );
    }
  }

  useEffect(() => {
    console.log("FIRING");
    if (props.display !== undefined) {
      Youtube(props.display.name).then((id) => {
        setVideoId(id);
      });
    }
  }, [videoId, props.display]);
  videoURL = `https://www.youtube.com/watch?v=${videoId}`;

  // handle submission to db
  const addFavourite = (e) => {
    const landmark = props.display.name;
    const description = props.display.description;
    if (props.display !== undefined) {
      e.preventDefault();

      if (!token) {
        alert("Please login or create an account to save a landmark.");
      } else {
        const favourite = {
          city: city,
          landmark: landmark,
          description: description,
          user_id: userId,
        };

        axios
          .post(
            "http://localhost:3001/favourites",
            { ...favourite }
            // { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((results) => {
            const favBtn = document.getElementById("fave");
            favBtn.style.color = "#fa8072";
            console.log("CITY: ", city);
            console.log("NAME: ", landmark);
            console.log("DESCR: ", description);
            console.log("USER: ", userId);
            console.log("RESULTS: ", results);
          })
          .catch((err) => console.log(err.message));
      }
    }
  };

  const faveBtnClicked = () => {
    const favBtn = document.getElementById("fave");
    favBtn.style.color = "#fa8072";
    // favBtn.style.disabled = true;
  };

  return (
    <>
    <div class="explore-display">
      <div class="explore-display-header">
        {props.display && props.display.name ? (
          <div class="explore-title">{props.display && props.display.name}</div>
        ) : (
          <div class="explore-title">Click markers on the map to discover</div>
        )}

        {props.display && props.display.name ? (
          <div class="explore-fav-button">
            <Tooltip title="Add to Favourites" placement="right">
              <FavoriteIcon id="fave" onClick={addFavourite} />
            </Tooltip>
          </div>
        ) : null}
      </div>

      {props.display && props.display.photo ? (
        <div class="explore-display-content">
          <div class="display-img-container">
            <img
              src={props.display && props.display.photo}
              class="display-img"
            />
          </div>
          <div class="explore-text">
            {props.display && props.display.description}
          </div>
        </div>
      ) : null}

      <div class="explore-player" id="explore-player">
        <VideoPlayer class="explore-player" videoId={videoId} />
      </div>
    </div>
  </>
  );
}
