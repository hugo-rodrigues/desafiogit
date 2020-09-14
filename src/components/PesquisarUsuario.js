import React, { useState } from 'react';

import {  Icon, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css';

function PesquisaUsuario() {

  const [userInput, setUserInput] = useState([])


  return (


          <Form  >
            <Form.Group widths='equal'>

              <Form.Input placeholder='Usuario GitHub' className="PesquisaUsuario" name='usuario github'  />

              <Button as={Link} to={`/informacoes/${userInput}`} color='pink'><Icon name='search' /></Button>

            </Form.Group>


          </Form>
  

  );
}

export default PesquisaUsuario;
