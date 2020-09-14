import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form } from 'semantic-ui-react'

import './App.css';

function App() {
  const [name,setName] = useState('');
  const [userName,setUserName] = useState('');
  const [followers,setFollowers] = useState('');
  const [following,setFollowing] = useState('');
  const [repos,setRepos] = useState('');
  const [avatar,setAvatar] = useState('');
  const [userInput,setUserInput] = useState('');
  const [error,setError] = useState(null);

  useEffect (() =>{
    fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then (data => {
      setData(data);
    });

  },[]);


  const setData = ({name, login, followers ,following, public_repos, avatar_url}) => {


    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handlerSearch = (e) =>{
  
    setUserInput(e.target.value);
  }

  const handlerSubmit = () => {
    
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then (data => {
     if(data.message){
       setError(data.message)
     }
     else{
      setData(data);
      setError(null);
     }
    
     
    });
  }



  return (


    <div>
     <div className="navbar">Github Search </div>
     <div className ="pesquisa">
       
     <Form onSubmit = {handlerSubmit}>
        <Form.Group widths='equal'>
          <Form.Input   placeholder='Usuario GitHub' name ='usuario github' onChange={handlerSearch} />
          <Form.Button>Pesquisar</Form.Button>
        </Form.Group>
  
       
      </Form>

         </div>
         {error ? <h1>{error}</h1> : 
         
         
         <div className="card">
         <Card>
           <Image src={avatar} wrapped ui={false} />
           <Card.Content>
           <Card.Header>{name}</Card.Header>
           <Card.Header>{userName}</Card.Header>
         </Card.Content>
         <Card.Content extra>
           <a>
             <Icon name='user' />
             {followers} folowers
           </a>
         </Card.Content>
         <Card.Content extra>
           <a>
             <Icon name='user' />
             {repos} repos
           </a>
         </Card.Content>
         <Card.Content extra>
           <a>
             <Icon name='user' />
             {following} folouing
           </a>
         </Card.Content>
       </Card>
         </div>
         
         
         }
  
    
   
    </div>
  );
}

export default App;
