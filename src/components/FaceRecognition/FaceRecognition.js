import React from "react";

const FaceRecognition = ({ imageURL, boundingBoxes }) => {
  return (
    <div style={{ maxWidth: 500, marginTop: 24 }} className="center relative">
      <img src={imageURL} alt="" />
      {boundingBoxes?.map((boundingBox, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${boundingBox?.top_row * 100}%`,
            left: `${boundingBox?.left_col * 100}%`,
            bottom: `${100 - boundingBox?.bottom_row * 100}%`,
            right: `${100 - boundingBox?.right_col * 100}%`,
            border: "2px solid pink",
          }}
        />
      ))}
    </div>
  );
};

export default FaceRecognition;
