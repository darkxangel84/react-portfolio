import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Projects from './components/pages/Projects';
import Footer from './components/Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header title="> _Aimee Tacchi" />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
          <Footer date={new Date().getFullYear()} />
        </div>
      </Router>
    );
  }
}

export default App;
