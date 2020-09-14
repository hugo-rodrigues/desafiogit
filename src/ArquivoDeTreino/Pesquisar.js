import { Card, Icon, Image,Form } from 'semantic-ui-react'
import React from "react";


return (

<div>
{/* <div className="navbar">Github Search </div> */}
<div className= "Github-Search">
  <h1> Github</h1>
</div>

<div className ="pesquisa">

<Form >
   <Form.Group widths='equal'>
   
     <Form.Input   placeholder='Usuario GitHub' className="PesquisaUsuario" name ='usuario github'  />

     <Form.Button color='pink'>

     <Icon   name='search' />

     </Form.Button>
   </Form.Group>

  
 </Form>

    </div>
    {/* {error ? <h1>{error}</h1> : 
    
    
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
    
    
    } */}



</div>
);

export default Pesquisar;