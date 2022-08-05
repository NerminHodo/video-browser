import React, { useState, useEffect } from "react";
import "../css/VideoBrowser.css";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

function VideoBrowser() {
  const key = process.env.REACT_APP_YT_API_KEY;

  const [searchTerm, setSearchTerm] = useState("Reactjs");
  const [selected, setSelected] = useState("Javascript");
  const [data, setData] = useState("");
  const [selectData, setSelectData] = useState("");

  useEffect(() => {
    console.log("loading");
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Search for new videos after one is selected with the selected as the new search term
  useEffect(() => {
    async function test() {
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

    test();
  }, [key, selected]);

  async function search() {
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
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    data && (
      <div className="VideoBrowser">
        <SearchBar setSearchTerm={setSearchTerm} search={search} />

        <div className="Video">
          {
            <VideoList
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
