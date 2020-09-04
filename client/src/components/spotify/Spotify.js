import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-player";
import getPlaylist from "../../hooks/cityData.js";
import getCity from "../../hooks/cityData.js";

export default function Spotify() {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'

  let city;
  let cityID;
  let uri = "spotify:playlist:5NbleROaHyKOZDwJEPm7f5?si=FgpZbIBMTKOlTUjBi5zv-w";

  const cityData = getCity()
    .then((result) => {
      const selectedCityData = result.map((city) => {
        console.log("playlist: ", city.playlist);

        return {
          URI: city.playlist || uri,
          cityName: city.name,
        };
      });
      console.log("SELECTED CITY DATA: ", selectedCityData);
      return selectedCityData;
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <SpotifyPlayer
      class="spotify"
      uri={cityData.URI} // undefined for now
      size={size}
      view={view}
      theme={theme}
    />
  );
}
