import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component{
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <footer className="Footer">
        <h1>hello Footer</h1>
      </footer>
    )
  }
}