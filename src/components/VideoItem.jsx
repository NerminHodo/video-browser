import React from "react";
import "../css/VideoItem.css";
import VideoDetail from "./VideoDetail";

function VideoItem({ video, id, selectVideo, player, setSelected, setSelectData }) {
  const thumbnail = video.snippet.thumbnails.default.url;
  const videoLink = "https://www.youtube.com/embed/" + video.id.videoId;

  function handleClick() {
    selectVideo(id);
    setSelected(video.snippet.title)
  }


  return player ? (
    <div className="container">
      <iframe
        className="videoPlayer responsive-iframe"
        title="videoPlayer"
        src={videoLink}
        frameBorder="0"
        allowFullScreen
        
      ></iframe>
    </div>
  ) : (
    <div className="oneVideo" onClick={handleClick}>
      <div>
        <img width="150" src={thumbnail} alt="" />
      </div>
      <div>
        <VideoDetail video={video} title={true} />
      </div>
    </div>
  );
}

export default VideoItem;
