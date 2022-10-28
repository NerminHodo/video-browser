import axios from "axios";

export async function getVideos(key, selected, setData) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: key,
          part: "snippet",
          maxResults: 5,
          q: selected,
          type: "video",
        },
      }
    );
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function search(key, searchTerm, setData) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: key,
          part: "snippet",
          maxResults: 5,
          q: searchTerm,
          type: "video",
        },
      }
    );
    console.log(response);
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
}

export function getVideoComments( key, videoId, headers, setComments) {
  axios
    .get(
      "https://www.googleapis.com/youtube/v3/commentThreads",
      {
        params: {
          part: "snippet",
          maxResults: 20,
          order:"relevance",
          key: key,
          videoId: videoId,
        },
      },
      { headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      } },
      { withCredentials: true }
    )
    .then((response) => {
      setComments(response.data.items);
      return response.data.items;
    })
    .catch((reason) => {
      console.log(reason);
      return false;
    });
}
