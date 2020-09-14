import React from 'react';

import { Container, Segment} from 'semantic-ui-react'


import '../App.css'
import PesquisarUsuario from './PesquisarUsuario';
function Home() {


  return (
    <section>
    <Container className='homePesquisa'>
      <Segment.Group>

        <Segment>
          <h1>GitHub <i>Pages</i></h1>
          </Segment>
        <Segment> 
              <PesquisarUsuario/>
        </Segment>

      </Segment.Group>
    </Container>
    </section>
  );
}

export default Home;
