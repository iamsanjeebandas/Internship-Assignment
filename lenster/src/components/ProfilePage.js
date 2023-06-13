import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfilePageStyle.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import ProfileFeeds from "./ProfileFeeds";
import ProfilePageGoTo from "./ProfilePageGoTo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Profilebanner from "./Profilebanner";

function ProfilePage() {
  return (
    <div>
      <NavBar></NavBar>
      <Profilebanner></Profilebanner>
      <ProfilePageGoTo></ProfilePageGoTo>
      <ProfileFeeds></ProfileFeeds>
      <div className="userDp">
        <img
          className="userDp-img"
          src="https://gateway.ipfscdn.io/ipfs/QmQ9zD5zPeXmCFtzgzx91AEmUep6zjmM8r2nLj4D3UUWkh/"
          alt=""
        />
      </div>
      <div className="userContainer">
        <div className="UserName">Heybela</div>
        <div className="UserNameTag">@Heybela</div>
      </div>
      <div className="description">
        <div className="userDescrip">
          Singer and Lyricist at Cold Strings Music Band | Audiophile!
        </div>
      </div>
      <div className="followersCount">
        <div>
          <div class="number">150</div>
          <div class="label">Following</div>
        </div>
        <div>
          <div class="number">170</div>
          <div class="label">Followers</div>
        </div>
      </div>
      <button className="followbtn">
        <div className="follownow">
          {" "}
          <FontAwesomeIcon className="faUserPlus" icon={faUserPlus} />
          Follow
        </div>
      </button>
      <hr className="horizontal-line" />

      <div className="socials">
        <div className="hashtag">
          <FontAwesomeIcon icon={faHashtag} />
          <p>13443454</p>
        </div>
        <div className="location">
          <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
          <p>location</p>
        </div>
        <div className="eth">
          <i class="fa-brands fa-ethereum"></i>
          <p> anothercollector.eth</p>
        </div>
        <div className="instagram">
          <i class="fa-brands fa-instagram"></i>
          www.instagram.com/whenporto/
        </div>
        <div className="twitter">
          <i class="fa-brands fa-twitter"></i>
          @WyfarerMuse
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
