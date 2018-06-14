import React, { Component } from 'react';
import './App.css';
import INTRO from './components/intro';
import HEADER from './components/header';
import DEETS from './components/deets';
import HOTELS from './components/hotels';
import BRIDESMAIDS from './components/bridesmaids';
import GROOMSMEN from './components/groomsmen';
import REGISTRY from './components/registry';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HEADER/>

        <h2 className="heading" id="intro">{"We're getting married!"}</h2>
          <INTRO/>

        <h2 className="heading" id="deets">When and where is this shit happening?</h2>
          <DEETS/>

        <h2 className="heading" id="hotels">Get a room, nerds!</h2>
          <HOTELS/>

        <h2 className="heading" id="bridesmaids">Check these babes out!</h2>
          <BRIDESMAIDS/>

        <h2 className="heading" id="gromsmen">Woah, look at these hunks!</h2>
          <GROOMSMEN/>


      </div>
    );
  }
}

export default App;
