import React from "react";
import SpotifyPlayer from "react-spotify-player";
import getCity from "../../hooks/cityData.js";

export default function Spotify(props) {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'

  const cityClicked = props.city;
  let newUri;

  // spaceSounds playlist
  let uri = "spotify:playlist:5NbleROaHyKOZDwJEPm7f5?si=FgpZbIBMTKOlTUjBi5zv-w";

  if (cityClicked) {
    console.log("cityClicked Name: ", cityClicked.marker.cityName);
    const getNewUri = getCity()
      .then((result) => {
        newUri = result
          .filter((city) => city.name === cityClicked.marker.cityName)
          .map((city) => {
            return (uri = city.playlist);
          });
        console.log("RESULT FROM GETCITY:", result);
        console.log("NEW URI: ", newUri[0]);
        uri = newUri[0];
        return uri;
      })
      .catch((error) => {
        console.log(error);
      });
    //uri = getNewUri;
  }

  return (
    <SpotifyPlayer
      class="spotify"
      uri={uri}
      size={size}
      view={view}
      theme={theme}
    />
  );
}
