import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-player";
import getCity from "../../hooks/cityData.js";

export default function Spotify(props) {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'
  let newUri;

  // spaceSounds playlist
  let uri = "spotify:playlist:5NbleROaHyKOZDwJEPm7f5?si=FgpZbIBMTKOlTUjBi5zv-w";

  useEffect(() => {
    const cityClicked = props.city;
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

          console.log("FINAL URI: ", uri);
          return uri;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.city]);
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
