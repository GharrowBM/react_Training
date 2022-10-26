import React from "react";
import LOGO from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { gsap } from "gsap";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.logoRef = React.createRef();
  }

  componentDidMount() {    
    var tl = gsap.timeline({
      repeat: -1
    })
    
    var animationLogoIN = tl.to(this.logoRef.current, {
      duration: 2,
      scale: 0.95,
      opacity: 0.9,
      ease: "power2.inOut",
      onComplete: animationLogoOUT
    });

    var animationLogoOUT = tl.to(this.logoRef.current, {
      duration: 2,
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
      onComplete: animationLogoIN
    });

    

    
  }

  render() {
    return (
      <header className="site-header">
        <Link to="/">
          <img
            src={LOGO}
            ref={this.logoRef}
            alt="Logo du site"
            className="site-logo"
          />
        </Link>
        <h1 className="site-name">Antoine Dieudonne</h1>
        <nav className="site-navbar">
          <NavButton to="/">Accueil</NavButton>
          <NavButton to="/agenda">Agenda</NavButton>
          <NavButton to="/cv">Mon CV</NavButton>
        </nav>
      </header>
    );
  }
}

export default Header;
