import React from 'react';
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';


import './App.css';

import Informacoes from './components/Informacoes';
import Home from './components/Home';
function App() {


  return (
<Router>
<div className="App">

  <Switch>
 
 <Route path="/" exact component={Home} />
<Route path="/informacoes" exact  component={Home}> <Redirect to="/" /></Route>

<Route path="/informacoes/:id"   component={Informacoes} /> 

 </Switch>
</div>
</Router>
  );
}

export default App;