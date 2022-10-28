import React, { useState, useEffect } from "react";
import "../css/VideoBrowser.css";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { getVideos, search, getVideoComments } from "../API";

function VideoBrowser() {
  const key = process.env.REACT_APP_YT_API_KEY;

  const [searchTerm, setSearchTerm] = useState("Reactjs");
  const [selected, setSelected] = useState("Javascript");
  const [data, setData] = useState("");
  const [selectData, setSelectData] = useState({
    id: { videoId: "WcyFd3kPz9k" },
  });
  const [comments, setComments] = useState([]);

  //Search for new videos after one is selected with the selected as the new search term
  useEffect(() => {
    getVideos(key, selected, setData);
  }, [selected]);

  function searchYT() {
    search(key, searchTerm, setData);
  }

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  useEffect(() => {
    getVideoComments(key, selectData.id.videoId, headers, setComments);
  }, [selectData]);

  return (
    data && (
      <div className="VideoBrowser">
        <SearchBar setSearchTerm={setSearchTerm} searchYT={searchYT} />

        <div className="Video">
          {
            <VideoList
              comments={comments}
              data={data}
              player={false}
              setSelected={setSelected}
              selectData={selectData}
              setSelectData={setSelectData}
            />
          }
        </div>
      </div>
    )
  );
}

export default VideoBrowser;
