import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-player";
import getPlaylist from "../../hooks/cityData.js";
import getCity from "../../hooks/cityData.js";

export default function Spotify() {
  //console.log("CITY NAME!!!: ", props.city);

  const size = "compact";
  const view = "coverart"; // or 'coverart'
  const theme = "black"; // or 'white'

  let city;
  let cityID;
  let uri = "spotify:playlist:5NbleROaHyKOZDwJEPm7f5?si=FgpZbIBMTKOlTUjBi5zv-w";

  const cityData = getCity()
    .then((result) => {
      const selectedCityDataData = result.map((city) => {
        console.log("city URI: ", city.uri);
        console.log("cityID: ", city.city_id);
        console.log("playlistID: ", city.id);

        return {
          URI: city.playlist,
          cityName: city.name,
        };
      });
      console.log("SELECTED CITY: ", selectedCityData);
      return selectedCityData;
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
