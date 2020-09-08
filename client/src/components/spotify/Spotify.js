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
      getCity()
        .then((result) => {
          newUri = result
            .filter((city) => city.name === cityClicked.marker.cityName)
            .map((city) => {
              return (uri = city.playlist);
            });
          uri = newUri[0];
          setPlaylist(uri);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.city]);

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
