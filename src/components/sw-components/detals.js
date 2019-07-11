/* eslint-disable no-unused-vars */
import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';


const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship
} = swapiService;

const PersonDetals = ({itemId}) => {
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getPerson}>
      {/* для работы Record ему нужно передать обьект item, который генериреться
      в Itemlist, для этого я копирую Record и добовляю ему свойство item  */}
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />    
    </ItemDetails>
  );
};

const PlanetDetals = ({itemId}) => {
  return (
    <ItemDetails 
      itemId={itemId} 
      getData={getPlanet}>
      
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="rotation Period" />
      <Record field="diameter" label="Diameter" />
       
    </ItemDetails>
  );
};

const StarshipDetals = ({itemId}) => {
  return (
    <ItemDetails 
      itemId={itemId} 
      getData={getStarship}>
      
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
      <Record field="passengers" label="Passengers" />
       
    </ItemDetails>
  );
};

export {
  PersonDetals,
  PlanetDetals,
  StarshipDetals
};