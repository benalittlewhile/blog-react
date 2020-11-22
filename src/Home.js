import React from "react";
import profile from "./profile.jpeg";

export function Home() {
  return (
    <div className="center">
      <div className="bioTop">
        <img
          src={profile}
          alt="Ben in front of a Tobor"
          className="profilePic"
        />
        <div className="contactInfo">
          <h2>Ben Hickey</h2>
          <h5>Aspiring Front-End Guy</h5>
          <br />
          Email: benhickeydev@gmail.com <br />
          github: @Benalittlewhile
        </div>
      </div>
    </div>
  );
}
