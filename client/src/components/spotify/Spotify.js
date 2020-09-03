import React from "react";
import SpotifyPlayer from 'react-spotify-player';

export default function Spotify(playlistId) {
  const size = 
  "compact"
;
  const view = 'coverart'; // or 'coverart'
  const theme = 'black'; // or 'white'
  return (
    <SpotifyPlayer
      uri="spotify:playlist:4pkof2WT0Spca1pX3j2dh4?si=gsmRtNJLSlycwVsT18p3dw"
      size={size}
      view={view}
      theme={theme}
    />
  )
}