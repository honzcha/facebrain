import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <div
          className="bounding-box"
          style={{
            left: box.leftCol,
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
        ></div>
        <img
          id="inputimage"
          src={imageUrl}
          width="500px"
          height="auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
