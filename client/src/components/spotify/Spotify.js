import React from "react";
import SpotifyPlayer from "react-spotify-player";
import getCity from "../../hooks/cityData.js";

export default function Spotify(props) {
  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'

  const city = props.city;
  console.log("CITY FROM SPOTIFY: ", city);

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

  console.log("cityData: ", cityData);
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
