const axios = require("axios");

export default async function getPlaylist() {
  return axios({
    method: "GET",
    url: "http://localhost:3001/playlists",
  })
    .then((response) => {
      console.log("PLAYLISTS: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
