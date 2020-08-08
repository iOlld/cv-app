import React, { Component } from 'react';
import './Header.scss';
import Nav from '../Nav';
import Logo from '../Logo';

export default class Header extends Component{
//   constructor (props) {
//     super(props);
//     this.state = {

//     }
//   }
  render() {
    return(
      <header className="Header">
        <div className="Header__wrap">
          <Logo/>
          <Nav/>
        </div>
      </header>
    )
  }
}