import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { Card, Icon, Image,Form } from 'semantic-ui-react'

import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Informacoes from './Informacoes';
import Home from './Home';
function App() {


  return (
<Router>
<div className="App">

  <Switch>
 
 <Route path="/" exact component={Home} />
<Route path="/informacoes" exact  component={Informacoes} /> 

<Route path="/informacoes/:id"   component={Informacoes} /> 
 {/* <Route path="/shop" exact component={Shop} />
 <Route path="/shop/:id"  component={ItemDetail} /> */}
 </Switch>
</div>
</Router>
  );
}

export default App;
