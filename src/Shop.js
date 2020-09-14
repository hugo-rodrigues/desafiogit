import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './App.css';

function Shop() {
    useEffect(() => {
      fetchItens();
    },[]);
    const [items,setItems] = useState([])

    const fetchItens = async () => {
      const data = await fetch ('https://api.github.com/users/hugo-rodrigues/repos');
      const items = await data.json(); 
      
      console.log(items);
      setItems(items);
    }

  return (


    <div>
      {items.map(item=>(
        <h1 key = {item.id} >
          <Link to ={`/shop/${item.id}`}>
          {item.name}
          </Link></h1>
      ))}
    </div>
  );
}

export default Shop;
