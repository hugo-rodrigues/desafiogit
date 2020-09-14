import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form, Grid, Segment, Button, Menu, Input } from 'semantic-ui-react'
import { Link} from 'react-router-dom'
import './App.css';
import Informacoes from './Informacoes';

function Nav() {

  const [userInput,setUserInput] = useState([])
 
  const handlerSearch = (e) =>{
  
    setUserInput(e.target.value);
    console.log(userInput);
  };


  const handlerSubmit = () => {
    
    console.log(userInput);
 
   }

  return (

<nav>
<Grid>
    <Grid.Column floated='left' width={5}>
    <Link Link to ='/'  className='link'>  <h1>Github <i>Pages</i></h1></Link>
  
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
    <Form  onSubmit = {handlerSubmit} >
   <Form.Group widths='equal'>
   
     <Form.Input   placeholder='Usuario GitHub' className="PesquisaUsuario" name ='usuario github' onChange={handlerSearch} />

     {/* <Form.Button color='pink' as={Link} to={`/informacoes/${userInput}`}> */}
     <Button as={Link} to={`/informacoes/${userInput}`} color='pink'><Icon   name='search' /></Button>

     

     {/* </Form.Button > */}
   </Form.Group>

  
 </Form>
    </Grid.Column>
  </Grid>
  

</nav>
  );
}

export default Nav;
