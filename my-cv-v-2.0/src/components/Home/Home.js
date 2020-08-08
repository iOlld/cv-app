import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component{
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <section className="Home container">
        <h1>Евгений Шевченко</h1>
      </section>
    )
  }
}