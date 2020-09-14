import React, { useState, useEffect } from 'react';

import { Card, Icon, Image, Form, Grid, Segment, Button, Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css';
import PesquisarUsuario from './PesquisarUsuario';

function Nav() {



  return (

    <nav>
      <Grid>
        <Grid.Column floated='left' width={5}>
          <Link Link to='/' className='link'>  <h1>Github <i>Pages</i></h1></Link>

        </Grid.Column>
        <Grid.Column floated='right' width={5}>
      <PesquisarUsuario/>
        </Grid.Column>
      </Grid>


    </nav>
  );
}

export default Nav;
