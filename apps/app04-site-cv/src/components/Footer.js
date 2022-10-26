import React from "react";
import "..//styles/Footer.css";

import TWITTER_ICON from "../assets/twitter.svg";
import GOOGLEPLUS_ICON from "../assets/google-plus.svg";
import FACEBOOK_ICON from "../assets/facebook.svg";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="site-footer">
        <div className="social-medias">
          <img src={TWITTER_ICON} alt="Compte Twitter" />
          <img src={GOOGLEPLUS_ICON} alt="Compte Google Plus" />
          <img src={FACEBOOK_ICON} alt="Compte Facebook" />
        </div>
        <div className="footer-text">
          Antoine Dieudonne - 96, Avenue de Flandre 59290 WASQUEHAL <br />
          +336 09 41 96 16 <br />
          gharrow.pro@gmail.com
        </div>
      </footer>
    );
  }
}

export default Footer;
