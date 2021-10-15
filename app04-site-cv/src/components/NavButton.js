import React from "react";
import '../styles/NavButton.css'
import {Link} from 'react-router-dom'

class NavButton extends React.PureComponent {
  render() {
    return <Link className="animated-link" to={this.props.to}><span>{this.props.children}</span></Link>;
  }
}

export default NavButton;
