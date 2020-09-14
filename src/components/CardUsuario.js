import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react'

import '../App.css';


function CardUsuario(props) {




    return (

        <aside>
        <Card fluid>

            <Image src={props.avatar_url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.userName}</Card.Meta>
                <Card.Meta>{props.bio}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.followers} Seguidores
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.repos} Repositorios
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.following} Seguindo
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='mail' />
                    {props.email}
                </a>

            </Card.Content>

        </Card>
        </aside>

    );
}

export default CardUsuario;
