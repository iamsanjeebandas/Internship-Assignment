import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faComment } from "@fortawesome/free-solid-svg-icons";
// import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Feeds() {
  return (
    <div className="feedArea">
      <div className="post-container first">
        <div className="post">
          <Link to="/profilepage">
            <img
              className="profile-img"
              src="https://gateway.ipfscdn.io/ipfs/QmQ9zD5zPeXmCFtzgzx91AEmUep6zjmM8r2nLj4D3UUWkh/"
              alt=""
            />
          </Link>

          <div className="user-name">Heybela</div>
          <div className="line1"></div>
          <div className="user-details">
            <span className="user-id">@Heybela</span>
            <div class="hover-details">
              {/* <p class="user-name">Heybela</p> */}
              <p class="user-bio">
                Singer and Lyricist at Cold Strings Music Band | Audiophile!
              </p>
              <p class="user-followers">Followers: 170</p>
              <p class="user-following">Following: 150</p>
              <button class="follow-button">
                {" "}
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
            </div>
            <span className="user-dot">.</span>
            <span className="time">3h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">a cup of tea is a solution for everything</p>
          <div className="img">
            <img src="/images/image.jpg" alt="" />
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              <div className="share">
                <FontAwesomeIcon
                  className="bag"
                  icon={faBagShopping}
                  style={{ color: "#f03000" }}
                />
                <span className="count">8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="post2">
          <img
            className="profile-img"
            src="https://gateway.ipfscdn.io/ipfs/bafybeibpdhio5dq4ng2dvhxgy7bvwi7pbdcchzmegm2pyd22mmsi5bt5he"
            alt=""
          />
          <div className="user-name">fernandombzk</div>
          {/* <div className="line2"></div> */}
          <div className="user-details">
            <span className="user-id">@fernandombzk</span>
            <span className="user-dot">.</span>
            <span className="time">1h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">
            i love this beautiful picture. Any time is tea time !
          </p>
          <div className="img">
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              {/* <div className="share">
                                <FontAwesomeIcon className="bag" icon={faBagShopping} style={{ color: "#f03000", }} />
                                <span className="count">8</span>
                            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="post-container second">
        <div className="post">
          <img
            className="profile-img"
            src="https://gateway.ipfscdn.io/ipfs/bafybeibfpcq5jkabhumd46nbp2eefhfug4gc2co2acuhzca35sh4k3npou"
            alt=""
          />
          <div className="user-name">Je$$yFries</div>
          <div className="line1"></div>
          <div className="user-details">
            <span className="user-id">@Je$$yFries</span>
            <span className="user-dot">.</span>
            <span className="time">10h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">📍Seoul, South Korea 🇰🇷</p>
          <div className="img">
            <img
              src="https://ik.imagekit.io/lens/media-snapshot/tr:w-1000/17dda0a8a59bca54f0922dae6404f377f4c9d54b151b40b5bc139db01bb2cc8f.jpg"
              alt=""
            />
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              <div className="share">
                <FontAwesomeIcon
                  className="bag"
                  icon={faBagShopping}
                  style={{ color: "#f03000" }}
                />
                <span className="count">8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="post2">
          <img
            className="profile-img"
            src="https://gateway.ipfscdn.io/ipfs/Qme3erPfT7Ri8VPY3UoAPz4cFdcDN4pf3sfDipcKwHNKBq"
            alt=""
          />
          <div className="user-name">Mari</div>
          <div className="line2"></div>
          <div className="user-details">
            <span className="user-id">@mazemari</span>
            <span className="user-dot">.</span>
            <span className="time">9h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">
            that's pretty cool 💖congrats to your friend! ✨️ i a I was just
            saying that @jovana_kvrzic looks like a model and maybe it's a good
            idea for her to collab with @ensocollective 💘💘 or build a fashion
            community here
          </p>
          <div className="img">
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              {/* <div className="share">
                                <FontAwesomeIcon className="bag" icon={faBagShopping} style={{ color: "#f03000", }} />
                                <span className="count">8</span>
                            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="post-container third">
        <div className="post">
          <img
            className="profile-img"
            src="https://gateway.ipfscdn.io/ipfs/bafybeibfpcq5jkabhumd46nbp2eefhfug4gc2co2acuhzca35sh4k3npou"
            alt=""
          />
          <div className="user-name">Martijn van Halen</div>
          {/* <div className="line1"></div> */}
          <div className="user-details">
            <span className="user-id">@tiptoe</span>
            <span className="user-dot">.</span>
            <span className="time">10h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">
            I'm thrilled to announce, Chess With Frens, a Web3 Chess App powered
            by Lens Protocol! -Login with Lens -On-chain game results (as NFTs)
            and ratings -Decentralized, Peer to Peer connection (via WebRTC)
            -On-chain prizes -and much more... Sign-up now for early access!
            https://www.chesswithfrens.com Follow & mirror this post and earn
            0.2 WMATIC via #wav3s (first 95, minimum 50 followers)
          </p>
          <div className="img">
            <img
              src="https://ik.imagekit.io/lens/media-snapshot/tr:w-1000/9c56dbe1dc3dc9d3981e0ec7a5460db0b3b43a431eafffe666244234ea83a280.jpg"
              alt=""
            />
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              <div className="share">
                <FontAwesomeIcon
                  className="bag"
                  icon={faBagShopping}
                  style={{ color: "#f03000" }}
                />
                <span className="count">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="post-container fourth">
        <div className="post">
          <img
            className="profile-img"
            src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="user-name">Staniis</div>
          <div className="line1 fourth-post"></div>
          <div className="user-details">
            <span className="user-id">@Jeswin</span>
            <span className="user-dot">.</span>
            <span className="time">10h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">
            Dogs do speak, but only to those who know how to listen.
          </p>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              <div className="share">
                <FontAwesomeIcon
                  className="bag"
                  icon={faBagShopping}
                  style={{ color: "#f03000" }}
                />
                <span className="count">8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="post2">
          <img
            className="profile-img"
            src="https://lens.infura-ipfs.io/ipfs/Qmb3KshJLTNfU3oi8YJnFg3wCcLFU66Vyngyz5hJkXtV2S"
            alt=""
          />
          <div className="user-name">Zelda</div>
          <div className="line2"></div>
          <div className="user-details">
            <span className="user-id">@0xzelda</span>
            <span className="user-dot">.</span>
            <span className="time">9h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <p className="caption">
            that's pretty cool 💖congrats to your friend! ✨️ i a I was just
            saying that @jovana_kvrzic looks like a model and maybe it's a good
            idea for her to collab with @ensocollective 💘💘 or build a fashion
            community here
          </p>
          <div className="img">
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">10</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">15</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">25</span>
              </div>
              {/* <div className="share">
                                <FontAwesomeIcon className="bag" icon={faBagShopping} style={{ color: "#f03000", }} />
                                <span className="count">8</span>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="post2 first">
          <img
            className="profile-img"
            src="https://gateway.ipfscdn.io/ipfs/QmU52yZBUGQbbd5tFXATvH2FK9BwEPkHK8AzBnFy3sCvyK"
            alt=""
          />
          <div className="user-name">laopanx</div>
          <div className="line2"></div>
          <div className="user-details">
            <span className="user-id">@lxxbr</span>
            <span className="user-dot">.</span>
            <span className="time">9h</span>
          </div>
          <div className="menu-container">
            <div className="menu-icon">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <p className="caption">Dogs are my favorite kind of people.</p>
          <div className="img">
            <div className="people-reactions">
              <div className="comment">
                <i className="fa-regular fa-comment"></i>
                <span className="count">9</span>
              </div>
              <div className="arrows">
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRightArrowLeft}
                  style={{ color: "#8549df" }}
                />
                <span className="count">5</span>
              </div>
              <div className="like">
                <p className="heart">&#x2661;</p>

                <span className="count">10</span>
              </div>
              {/* <div className="share">
                                <FontAwesomeIcon className="bag" icon={faBagShopping} style={{ color: "#f03000", }} />
                                <span className="count">8</span>
                            </div> */}
            </div>
          </div>
          1
        </div>
      </div>
    </div>
  );
}

export default Feeds;
