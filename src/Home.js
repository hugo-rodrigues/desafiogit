import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form,Container,Segment,Button } from 'semantic-ui-react'
import {Link,Redirect} from 'react-router-dom'
import './App.css';

function Home() {
    // useEffect(() => {
    //   fetchItens();
    // },[]);
     const [userInput,setUserInput] = useState([])

    // const fetchItens = async () => {
    //   const data = await fetch ('https://api.github.com/users/hugo-rodrigues/repos');
    //   const items = await data.json(); 
      
    //   console.log(items);
    //   setItems(items);
    // }

   
      
    const handlerSearch = (e) =>{
  
        setUserInput(e.target.value);
        console.log(userInput);
      };


    
  const handlerSubmit = () => {
    
   console.log(userInput);

  }


  return (

    <Container className = 'homePesquisa'>
    <Segment.Group>
     
      <Segment><h1>GitHub <i>Pages</i></h1></Segment>
      <Segment>    <div>
<Form  onSubmit = {handlerSubmit} >
   <Form.Group widths='equal'>
   
     <Form.Input   placeholder='Usuario GitHub' className="PesquisaUsuario" name ='usuario github' onChange={handlerSearch} />

     {/* <Form.Button color='pink' as={Link} to={`/informacoes/${userInput}`}> */}
     <Button as={Link} to={`/informacoes/${userInput}`} color='pink'><Icon   name='search' /></Button>

     

     {/* </Form.Button > */}
   </Form.Group>

  
 </Form>
    </div></Segment>
     
    </Segment.Group>
  </Container>

  );
}

export default Home;
