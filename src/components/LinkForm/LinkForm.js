import React from "react";
import "./LinkForm.css";

const LinkForm = ({ onButtonSubmit, onInputChange }) => {
  return (
    <div>
      <p className="f3">{"Paste a link to an image with a face, it will detect the face location. Only one face for now."}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2  w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 div white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
