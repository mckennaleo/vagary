const axios = require('axios');

export default async function makeRequest(locationId) {
    
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
      const locationData = response.data.data.filter(x => x.location_id !== '0' &&  x.photo).map(x => { 

        return {
          location_id: x.location_id,
          name: x.name,
          latitude: x.latitude,
          longitude: x.longitude,
          thumbnail: x.photo.images.thumbnail.url,
          description: x.description
        }
      }); 

      return locationData
    })
    .catch((error)=>{
      console.log(error)
    })
};
