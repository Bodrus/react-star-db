/* eslint-disable no-unused-vars */
import React from 'react';

import './item-list.css';

const ItemList = (props) => {
  
  const { data, onItemSelected, children: renderLabel } = props;
 
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <ul className="item-list list-group">
      {data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
          
        return (
          <li className="list-group-item" 
            key={id} 
            onClick={() => onItemSelected(id)}>
            {label} 
          </li>
        );       
      })}
    </ul>   
  ); 
};





export default ItemList;
