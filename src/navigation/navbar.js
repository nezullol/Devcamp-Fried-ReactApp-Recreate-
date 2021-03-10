import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNav from './topnav'
import Nav from './nav'
import Home from '../pages/home'
import About from '../pages/about'
import Menu from '../pages/menu'
import Contact from '../pages/contact'

function Navbar() {
  return (

  <Router>


<div className="mainbody">
  <TopNav />
</div>
  <Switch>

<Route exact path="/" component={Home} className="test" />

<Route  path="/about" component={About} />

<Route  path="/menu" component={Menu} />

<Route  path="/contact" component={Contact} />

  </Switch>
<Nav />

  </Router>
  );
}

export default Navbar;
