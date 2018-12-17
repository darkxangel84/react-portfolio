import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home_pg from './components/pages/Home_pg';
import About_pg from './components/pages/About_pg'
import Projects_pg from './components/pages/Projects_pg';
import Project_pg from './components/pages/Project_pg';
import Not_found_pg from './components/pages/Not_found_pg';
import Footer from './components/Footer';


import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header title="> _Aimee Tacchi" />
          <Switch>
            <Route exact path='/' component={Home_pg} />
            <Route exact path='/about' component={About_pg} />
            <Route exact path='/projects' component={Projects_pg} />
            <Route exact path={`/projects/:projectId`} component={Project_pg} />
            <Route path='*' component={Not_found_pg} />
          </Switch>
          <Footer date={new Date().getFullYear()} />
        </div>
      </Router>
    );
  }
}

export default App;
