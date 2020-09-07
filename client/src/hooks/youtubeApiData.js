import searchYoutube from "youtube-api-v3-search";
// const API_KEY = "AIzaSyBh4p0B-h7qXafQsZnQjgzlf8lhBzY52OY";
const API_KEY = "AIzaSyCtjX_YfwNdKzOiyXI9Sw606wmb6LB-8xE";
// const API_KEY = "AIzaSyD8FkTfWz0ETmR1NZ7NYo1X8iq75rBbXAw";

export default function Youtube(searchTerm) {
  const options = {
    q: searchTerm,
    part: "snippet",
    type: "video",
    order: "relevance",
    maxResults: 1,
  };
  console.log("Firing");
  return searchYoutube(API_KEY, options).then(
    (result) => result.items[0].id.videoId
  );
}
