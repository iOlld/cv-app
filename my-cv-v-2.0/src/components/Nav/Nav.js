import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
  constructor (props) {
    super(props);
    this.ulNav = React.createRef();
  }
  render() {
    return(
      <nav className="Nav">
        <ul ref={this.ulNav}>

            <li><Link data-text="Home" to="/">Home</Link></li>
            <li><Link data-text="About" to="/about">About</Link></li>
            <li><Link data-text="Skills" to="/skills">Skills</Link></li>
            <li><Link data-text="Works" to="/works">Works</Link></li>
            <li><Link data-text="Contacts" to="/contacts">Contacts</Link></li>

        </ul>
      </nav>
    )
  }
}