import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form } from 'semantic-ui-react'
import Nav from './Nav';
import {Link} from 'react-router-dom'
import './App.css';

function Informacoes({match}) {
    const [name,setName] = useState('');
    const [userName,setUserName] = useState('');
    const [followers,setFollowers] = useState('');
    const [following,setFollowing] = useState('');
    const [repos,setRepos] = useState('');
    const [avatar,setAvatar] = useState('');
    const [userInput,setUserInput] = useState('');
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
        //     const newRepositorioData = {};
        //     data.forEach((repositorio, index) => {
        //     newRepositorioData[index + 1] = {
        //     id: repositorio.id,
        //     name: repositorio.name
        //   };
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
            
              // console.log(ordenada);
              //  setRepoInfo(ordenada);
          console.log(newRepositorioData);
          setError(null);
         }
        
         
        });

    
      },[match.params.id]);

    
     

      const getRepositorioCard = (repositorio) => {
        const { id, name ,descricao, star } = repoInfo[repositorio];
        return (
          <div  key={id}>
           
              
            <h1>
                  {name}
                 
                  </h1>
                
                  <h1>
               
                  {descricao} 
                  </h1>
                  <h1>
                 
                 {star}
             
                 </h1>
           
          </div>
        );
      };

      const setData = ({name, login, followers ,following, public_repos, avatar_url}) => {


        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
      };

  return (



    <div className="card">
        <Nav />
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

       <div container spacing={2} >

          {Object.keys(repoInfo).map(
            (id) =>
             
            getRepositorioCard(id)
          )}
        </div>
         </div>


  );
}

export default Informacoes;
