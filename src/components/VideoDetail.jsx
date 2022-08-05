import React from "react";
import "../css/VideoDetail.css";

function VideoDetail({ video, title }) {
  return (
    <div className="details">
      <div className={title && "videoDetail"}>
        {!title ? (
          <h2>{video.snippet.title}</h2>
        ) : (
          <p className="thumbnailText">{video.snippet.title}</p>
        )}
        {!title && <p>{video.snippet.description}</p>}
      </div>
    </div>
  );
}

export default VideoDetail;
