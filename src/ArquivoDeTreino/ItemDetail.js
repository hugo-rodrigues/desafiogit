import React, { useState, useEffect } from 'react';

import { Card, Icon, Image,Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './App.css';

function Item({match}) {
    useEffect(() => {
        fetchItem();
        console.log(match)
    },[]);
    const [item,setItem] = useState([])

    const fetchItem = async () => {
      const data = await fetch ('https://api.github.com/users/hugo-rodrigues');
      const items = await data.json(); 
      
      console.log(items);
      setItem(items);
    }

  return (


    <div>
     <h1>item</h1>
  <h2>{match.params.id}</h2>

  
    </div>
  );
}

export default Item;
