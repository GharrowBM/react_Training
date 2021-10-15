import React, { useEffect } from "react";
import LOGO from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { gsap } from "gsap";

class Header extends React.PureComponent {
  useEffect() {
    return gsap.to(".site-logo", { duration: 3, rotation: 360 });
  }

  render() {
    return (
      <header className="site-header">
        <Link to="/">
          <img src={LOGO} alt="Logo du site" className="site-logo" />
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
