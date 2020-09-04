import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-player";
import getPlaylist from "../../hooks/playlistData.js";
// import getCity from "../../hooks/cityData.js";

export default function Spotify() {


  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'

  let city;
  let cityID;
  let uri = "spotify:playlist:5NbleROaHyKOZDwJEPm7f5?si=FgpZbIBMTKOlTUjBi5zv-w";

  const playlistData = getPlaylist();
  playlistData
    .then((result) => {
      console.log("RESULT: ", result);

      const playlistData = result.map((playlist) => {
        console.log("PLAYLIST URI: ", playlist.uri);
        console.log("cityID: ", playlist.city_id);
        console.log("playlistID: ", playlist.id);

        return {
          playlistURI: playlist.uri,
          cityID: playlist.city_id,
        };
      });
      return playlistData;
    })
    .catch((error) => {
      console.log(error);
    });

  // const cityData = getCity();
  // cityData
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

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
