import searchYoutube from "youtube-api-v3-search";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY


export default function Youtube(searchTerm) {
  const options = {
    q: searchTerm,
    part: "snippet",
    type: "video",
    order: "relevance",
    maxResults: 1,
  };

  return searchYoutube(API_KEY, options).then(
    (result) => result.items[0].id.videoId
  );
}
