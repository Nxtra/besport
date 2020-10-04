import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./socialFollow.css";

import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/nick-van-hoof-45337914b"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/TheNickVanHoof" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
