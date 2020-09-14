import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form,Grid } from 'semantic-ui-react'
import Nav from './Nav';
import {Link} from 'react-router-dom'
import './App.css';
import Erro from './Erro';
function Informacoes({match}) {
    const [name,setName] = useState('');
    const [userName,setUserName] = useState('');
    const [followers,setFollowers] = useState('');
    const [following,setFollowing] = useState('');
    const [repos,setRepos] = useState('');
    const [avatar,setAvatar] = useState('');
    const [bio,setBio] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState(null);
    const [repoInfo, setRepoInfo] = useState({});


    useEffect (() =>{
        fetch(`https://api.github.com/users/${match.params.id}`)
        .then(res => res.json())
        .then (data => {
         if(data.message){
           setError(data.message)
           console.log(data);
         }
         else{
             console.log(data);
          setData(data);
          setError(null);
         }
        
         
        });
      
        fetch(`https://api.github.com/users/${match.params.id}/repos`)
        .then(res => res.json())
        .then (data => {
         if(data.message){
           setError(data.message)
         }
         else{
            const  results  = data;
            const newRepositorioData = {};
 
        const ordenacao = results.sort(function(a,b)
        {
          return b.stargazers_count - a.stargazers_count  ;
        }
        );

        ordenacao.forEach((repositorio, index) => {
            newRepositorioData[index] = {
              id: repositorio.id,
              name: repositorio.name,
              descricao : repositorio.description,
              star : repositorio.stargazers_count,
            };
          });
            
          setRepoInfo(newRepositorioData);
            

          console.log(newRepositorioData);
          setError(null);
         }
        
         
        });

    
      },[match.params.id]);

    
     

      const getRepositorioCard = (repositorio) => {
        const { id, name ,descricao, star } = repoInfo[repositorio];
        return (
          <div  key={id}>
           <Card fluid className='cardsRepositorio'>
           <Card.Content>
      <Card.Header><h1 className='TextoRosa'>{name}</h1></Card.Header>
      <Card.Description>
        {descricao} 
      </Card.Description>
 
    </Card.Content>
           <Card.Content extra>
      <a>
        <Icon name='star' />
        {star}
      </a>
    </Card.Content>
           </Card>
           
           
          </div>
        );
      };

      const setData = ({name, login, followers ,following, public_repos, avatar_url, bio, email}) => {

        setBio(bio);
        setEmail (email);
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
      };
      console.log(email);
  return (
<div>
<Nav />
  {error ? <Erro/> :
  
  <Grid>
  <Grid.Column width={4}>
  <Card fluid>
    
         <Image src={avatar} wrapped ui={false} />
         <Card.Content>
         <Card.Header>{name}</Card.Header>
         <Card.Meta>{userName}</Card.Meta>
         <Card.Meta>{bio}</Card.Meta>
       </Card.Content>
       <Card.Content extra>
         <a>
           <Icon name='user' />
           {followers} Seguidores
         </a>
       </Card.Content>
       <Card.Content extra>
         <a>
           <Icon name='user' />
           {repos} Repositorios
         </a>
       </Card.Content>
       <Card.Content extra>
         <a>
           <Icon name='user' />
           {following} Seguindo
         </a>
       </Card.Content>
       <Card.Content extra>
         <a>
           <Icon name='mail' />
           {email} 
         </a>
       
       </Card.Content>
    
    </Card>
  </Grid.Column>
  <Grid.Column width={9}>
  {Object.keys(repoInfo).map(
          (id) =>
           
          getRepositorioCard(id)
        )}


  </Grid.Column>

</Grid>}

   
    </div>



  );
}

export default Informacoes;
