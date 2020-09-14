import React, { useState, useEffect } from 'react';

import { Card, Icon, Image, Form, Grid, Segment, Button, Menu, Input } from 'semantic-ui-react'

import '../App.css';


function CardRepositorio(props) {


    const getRepositorioCard = () => {
        const { id, name, descricao, star } = props;
        return (
            <div key={id}>
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

    return (


        getRepositorioCard()


    );
}

export default CardRepositorio;
