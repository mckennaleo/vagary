const axios = require('axios');

export default async function makeRequest(locationId) {
    // returns data retrieved from GET req to TripAdvosor api
    return axios({
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
    "limit": "30",
    }
    })
    .then((response)=>{
      // filters out "experiences", which don't have photos or actual location, so that only landmarks remain. Then parses the return object
      const locationData = response.data.data.filter(landmark => landmark.location_id !== '0' &&  landmark.photo).map(landmark => { 

        return {
          location_id: landmark.location_id,
          name: landmark.name,
          latitude: landmark.latitude,
          longitude: landmark.longitude,
          thumbnail: landmark.photo.images.thumbnail.url,
          description: landmark.description
        }
      }); 

      return locationData
    })
    .catch((error)=>{
      console.log(error)
    })
};
