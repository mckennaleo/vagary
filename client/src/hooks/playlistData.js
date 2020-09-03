const axios = require("axios");

export default async function getPlaylist() {
  return axios({
    method: "GET",
    url: "http://localhost:3001/playlists",
  })
    .then((response) => {
      console.log("PLAYLISTS: ", response.data);
      return response.data;
      // const playlistData = response.data.map((playlist) => {
      //   console.log("PLAYLIST URI: ", playlist.uri);
      //   return {
      //     playlistURI: playlist.uri,
      //     cityID: playlist.city_id,
      //   };
      // });
      // return playlistData;
    })
    .catch((error) => {
      console.log(error);
    });
}
