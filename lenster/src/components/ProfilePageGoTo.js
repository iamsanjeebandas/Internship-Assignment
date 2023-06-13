import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfilePageStyle.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function ProfilePageGoTo() {
  return (
    <div className="GoTos">
      <div className="actions">
        <div className="feed">
          <FontAwesomeIcon icon={faFile} style={{ color: "#8b5cf6" }} />
          <span className=" feed-text" style={{ color: "#8b5cf6" }}>
            feeds
          </span>
        </div>
        <div className="replies">
          <FontAwesomeIcon icon={faComments} style={{ color: "#757b84" }} />
          <span className="replies-text">replies</span>
        </div>
        <div className="media">
          <FontAwesomeIcon icon={faFilm} style={{ color: "#757b84" }} />
          <span className=" media-text">media</span>
        </div>
        <div className="collected">
          <FontAwesomeIcon icon={faBagShopping} style={{ color: "#757b84" }} />
          <span className=" collected-text">collected</span>
        </div>
        <div className="nfts">
          <FontAwesomeIcon icon={faImage} style={{ color: "#757b84" }} />
          <span className=" nfts-text">nfts</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePageGoTo;
