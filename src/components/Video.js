import React from "react";

const Video = (data) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <video src={data.url} type="video/mp4" autoPlay />
      </div>
    </div>
  );
};

export default Video;
