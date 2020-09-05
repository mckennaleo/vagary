import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-player";
import getCity from "../../hooks/cityData.js";
import Globe from "../Globe";

export default function Spotify(props) {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'
  const [playlist, setPlaylist] = useState();

  // spaceSounds playlist
  let uri = "spotify:playlist:5NbleROaHyKOZDwJEPm7f5?si=FgpZbIBMTKOlTUjBi5zv-w";
  const cityClicked = props.city;
  const getNewUri = useEffect(() => {
    let newUri;
    if (cityClicked) {
      //console.log("cityClicked Name: ", cityClicked.marker.cityName);
      getCity()
        .then((result) => {
          newUri = result
            .filter((city) => city.name === cityClicked.marker.cityName)
            .map((city) => {
              return (uri = city.playlist);
            });
          // console.log("RESULT FROM GETCITY:", result);
          uri = newUri[0];

          console.log("FINAL URI: ", uri);
          setPlaylist(uri);
        })
        .catch((error) => {
          console.log(error);
        });
      // newUri = uri;
      // console.log("NEEEW: ", getCity());
    }
  }, [props.city]);
  console.log("GET NEW: ", playlist);
  return (
    <SpotifyPlayer
      class="spotify"
      uri={cityClicked ? playlist : uri}
      size={size}
      view={view}
      theme={theme}
    />
  );
}
