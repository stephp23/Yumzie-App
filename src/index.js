import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Team from './components/Team';
import Privacy from './components/Privacy';
import CategoryResults from './components/CategoryResults';

//All of the routes are listed here.
//Note that the ORDER of the routes DOES MATTER in the way they appear!
const routing = (
  <Router>
    <div className="page-container">
      <Header />
      <hr />
      <div className="content-wrap">
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/team" component={Team}/>
        <Route exact path="/privacy" component={Privacy}/>
        <Route exact path="/category/:query" component={CategoryResults} /> 
        <Route path="/:search" component={App} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);



ReactDOM.render(routing, document.getElementById("root"));

//REFACTOR THIS CODE POST MVP
//All of this code should be in App.js