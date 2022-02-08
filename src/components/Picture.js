import React from "react";

const Picture = (data) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.url} alt="" />
      </div>
    </div>
  );
};

export default Picture;
