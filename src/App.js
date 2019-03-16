import React, { Component } from 'react';
import Navbars from './components/Navbars';
// eslint-disable-next-line 
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="APP" className="App">
        <header>
          {/* <Navbars /> */}
        </header>
        <div className="App-intro">
        <h1 className="title2"><p>The Short Stop</p></h1>
        <h2 className="subtitle">Eat well. Travel often.</h2>
        {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
