import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form } from 'semantic-ui-react'
import { Link, withRouter} from 'react-router-dom'
import './App.css';

function Nav() {
 
  const Navstyle={
    color: 'white'
  };

  return (

<nav>
    <h3>logo</h3>
    <ul className="nav-links">
      <Link style={Navstyle} to ='/about'>
        <li>
            about
        </li>
        </Link>
        <Link style={Navstyle}  to ='/shop'>
        <li>
            shop
        </li>
        </Link>
    </ul>
</nav>
  );
}

export default Nav;
