import React from "react";

import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className="white f3">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className="pa4 br3 shadow-5 form ml-auto mr-auto">
        <div className="center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onImageSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
