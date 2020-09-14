import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form,Container,Segment,Button } from 'semantic-ui-react'
import {Link,Redirect} from 'react-router-dom'
import './App.css';

function Erro() {

  return (

    <h1 className='TextoRosa'>Sorry, User not Found :(</h1>
  );
}

export default Erro;
