import React from "react";

function Banner() {
  return (
    <div className="herobanner">
      <div
        className="welcome"
        style={{ backgroundImage: "url(/images/banner.png)" }}
      >
        <div className="welcome-message">
          <h1>Welcome to Lenster &#x1F44B;</h1>
          <h6>
            Lenster is a decentralized, and permissionless social media app
            built with Lens <br /> Protocol &#127810;
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Banner;
