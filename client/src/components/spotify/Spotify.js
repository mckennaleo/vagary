import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-player";
import getPlaylist from "../../hooks/playlistData.js";

export default function Spotify() {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'
  const uri =
    "spotify:playlist:4pkof2WT0Spca1pX3j2dh4?si=gsmRtNJLSlycwVsT18p3dw";

  const data = getPlaylist();
  data
    .then((result) => {
      console.log("DATA AFTER: ", data);
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
