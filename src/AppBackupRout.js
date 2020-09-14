import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { Card, Icon, Image,Form } from 'semantic-ui-react'

import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
function App() {


  return (
<Router>
<div className="App">
  <Nav/>
  <Switch>
  {/* <Route path="/about" exact component={About} /> */}
 <Route path="/about" exact component={About} />
 <Route path="/shop" exact component={Shop} />
 <Route path="/shop/:id"  component={ItemDetail} />
 </Switch>
</div>
</Router>
  );
}

export default App;
