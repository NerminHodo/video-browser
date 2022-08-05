import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import "../css/VideoList.css";
import VideoDetail from "./VideoDetail";

function VideoList({ data, setSelected, setSelectData, selectData }) {
  let items = data.items;
  const [video, setVideo] = useState(data.items[0]);

  useEffect(() => {
    setSelectData(data.items[0]);
  }, [data, setSelectData]);

  function selectVideo(id) {
    setVideo(data.items[id]);
    setSelectData(data.items[id]);
  }
  return (
    <div className="Video">
      <div className="videoPlayer">
        <VideoItem video={video} player={true} />
        <VideoDetail video={video} />
      </div>
      <div className="VideoList">
        {items.map((video, i) => (
          <div className="" key={i}>
            <VideoItem
              id={i}
              video={video}
              selectVideo={selectVideo}
              setSelected={setSelected}
              setSelectData={setSelectData}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
