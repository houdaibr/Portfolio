import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web & Mobile Developer",
          "Devops Enginner",
          "UX/UI Designer",
          "Software Engineer",
          " Tech Enthusiast!",
          "CAS Volunteer",
          "CIT member",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
