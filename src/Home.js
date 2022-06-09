import React from "react";
import profile from "./profile.jpeg";

export function Home() {
  return (
    <div className="content">
      <div className="bioTop">
        <img
          src={profile}
          alt="Ben in front of a Tobor"
          className="profilePic"
        />
        <div className="contactInfo">
          <h2>Ben Hickey</h2>
          <h4>Fullstack Javascript Nerd</h4>
          <h5>Friend of Corgis</h5>
          <br />
          Email: benhickeydev@gmail.com <br />
          github: @Benalittlewhile
        </div>
      </div>
    </div>
  );
}
