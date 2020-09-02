import searchYoutube from 'youtube-api-v3-search';
const API_KEY = "AIzaSyCtjX_YfwNdKzOiyXI9Sw606wmb6LB-8xE";

export default function Youtube(searchTerm) {
  const options = {
    q: searchTerm,
    part: 'snippet',
    type: 'video',
    order: 'relevance',
    maxResults: 1
  }
  return searchYoutube(API_KEY, options)
  .then(result => result.items[0].id.videoId)
}
