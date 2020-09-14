import React, { useState, useEffect } from 'react';

import { Grid } from 'semantic-ui-react'
import Nav from './Nav';

import '../App.css';
import Erro from './Erro';
import CardRepositorio from './CardRepositorio';
import CardUsuario from './CardUsuario';

function Informacoes({ match }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [repoInfo, setRepoInfo] = useState({});
  const [UserInfo, setUserInfo] = useState({});


  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
          console.log(data);
        }
        else {
          console.log(data);
          setData(data);
          setUserInfo(data);
          setError(null);
        }


      });

    fetch(`https://api.github.com/users/${match.params.id}/repos`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        }
        else {
          const results = data;
          const newRepositorioData = {};

          const ordenacao = results.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
          }
          );

          ordenacao.forEach((repositorio, index) => {
            newRepositorioData[index] = {
              id: repositorio.id,
              name: repositorio.name,
              descricao: repositorio.description,
              star: repositorio.stargazers_count,
            };
          });

          setRepoInfo(newRepositorioData);



          setError(null);
        }


      });


  }, [match.params.id]);





  const setData = ({ name, login, followers, following, public_repos, avatar_url, bio, email }) => {

    setBio(bio);
    setEmail(email);
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <div>
      <Nav />
      {error ? <Erro /> :

        <Grid>
          <Grid.Column width={4}>
            <CardUsuario {...UserInfo} />

          </Grid.Column>
          <Grid.Column width={9}>
            {Object.keys(repoInfo).map(
              (id) =>

                <CardRepositorio {...repoInfo[id]} />

            )}


          </Grid.Column>

        </Grid>}


    </div>
  );
}

export default Informacoes;
