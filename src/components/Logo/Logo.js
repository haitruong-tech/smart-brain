import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        className="tilt br2 shadow-2 pa3"
        style={{
          height: 100,
          width: 100,
        }}
      >
        <img src={brain} alt="Logo" />
      </Tilt>
    </div>
  );
};

export default Logo;
