import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import Contacts from '../Contacts';
import About from '../About';
import Skills from '../Skills';
import Footer from '../Footer';
import Works from '../Works';
import Other from '../Other';
import Home from '../Home';
import { Switch, Route } from 'react-router';

export default class App extends Component{
  // constructor (props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  render() {
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/works" component={Works}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route component={Other}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}