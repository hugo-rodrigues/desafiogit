import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './App.css';

function Shop() {
  

  return (


    <div>
       <Grid>
    <Grid.Column width={4}>
    <Card
    fluid
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
 
  />
    </Grid.Column>
    <Grid.Column width={9}>

    <Card fluid  header='Option 1' />
 
    </Grid.Column>
 
  </Grid>
    </div>
  );
}

export default Shop;
