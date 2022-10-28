import React from "react";

function Comment({ comment }) {
  const text = comment.textDisplay;
  const auth = comment.authorDisplayName;
  const image = comment.authorProfileImageUrl;
  const likes = comment.likeCount;
  const time = comment.publishedAt;

  const test = new Date(time);
  const timestamp =
    test.getFullYear() +
    "-" +
    (test.getMonth() + 1) +
    "-" +
    test.getDate() +
    "  " +
    test.getHours() +
    ":" +
    test.getMinutes();

  return (
    <div className="comment">
      <div style={{ display: "flex" }}>
        <div className="commentImageDiv">
          <img src={image} alt="" />
        </div>
        <div className="commentRestDiv">
          <div className="commentAuthDiv">
            {" "}
            <h2>{auth}</h2>{" "}
          </div>
          <div className="commentTextDiv">
            {" "}
            <p>{text}</p>{" "}
          </div>

          <div className="commentTimeDiv">{timestamp}</div>
        </div>
      </div>
      <div className="commentLikesDiv">
        <p>Likes</p>
        <p>{likes}</p>
      </div>
    </div>
  );
}

export default Comment;
