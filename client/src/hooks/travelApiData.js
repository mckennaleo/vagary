const axios = require('axios');

export default async function makeRequest(locationId) {

    axios({
    "method":"GET",
    "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
    "headers":{
    "content-type":"application/json",
    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key":"c00da959a9mshe5a9a7c535437cep1aa58djsnfed5c123abfe",
    "useQueryString":true
    },"params":{
    "lang": "en_US",
    "currency": "USD",
    "sort": "ranking",
    "lunit": "km",
    "location_id": locationId,
    "limit": "15",
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
};
