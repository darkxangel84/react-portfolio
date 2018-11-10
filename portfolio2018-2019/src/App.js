import React, { Component } from 'react';
import Header from './components/Header';
import HeroBanner from './components/heroBanner';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="> _Aimee Tacchi" />
        <HeroBanner name="Aimee" />
        <Main headingTitle="I’m passionate about clean looking websites that work really well on all devices." />
        <Footer date={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
