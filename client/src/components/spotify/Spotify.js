import React from "react";
import SpotifyPlayer from "react-spotify-player";
import getPlaylist from "../../hooks/playlistData.js";

export default function Spotify(cityID) {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'
  const uri =
    "spotify:playlist:4pkof2WT0Spca1pX3j2dh4?si=gsmRtNJLSlycwVsT18p3dw";

  console.log("GET PLAYLIST: ", getPlaylist());

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
