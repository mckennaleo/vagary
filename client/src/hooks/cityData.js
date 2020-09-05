const axios = require("axios");

export default async function getCity() {
  return axios({
    method: "GET",
    url: "http://localhost:3001/cities",
  })
    .then((response) => {
      console.log("CITIES: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
