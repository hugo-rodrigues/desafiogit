import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form } from 'semantic-ui-react'
import { Link} from 'react-router-dom'
import './App.css';
import Informacoes from './Informacoes';

function Nav() {
 
  const Navstyle={
    color: 'white'
  };
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
<Form  onSubmit = {handlerSubmit} >
   <Form.Group widths='equal'>
   
     <Form.Input   placeholder='Usuario GitHub' className="PesquisaUsuario" name ='usuario github' onChange={handlerSearch} />

     <Form.Button color='pink' as={Link} to={`/informacoes/${userInput}`} >

     <Icon   name='search' />

     </Form.Button >
   </Form.Group>

  
 </Form>
</nav>
  );
}

export default Nav;
