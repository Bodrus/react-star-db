
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
// import ItemList from '../item-list';
// import ItemDetails, { Record } from '../item-details';
import SwapiServece from '../../services/swapi-service';

import {
  PersonDetals,
  PlanetDetals,
  StarshipDetals
} from '../sw-components';

import Row from '../row';

import './app.css';


export default class App extends React.Component {
  
  swapiService = new SwapiServece();
  
  state = {
    hasError: false
  }
  
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
   
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    
    // const personalDetails = (
    //   <ItemDetails 
    //     itemId={11} 
    //     getData={getPerson}>
    //     {/* для работы Record ему нужно передать обьект item, который генериреться
    //     в Itemlist, для этого я копирую Record и добовляю ему свойство item  */}
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />    
    //   </ItemDetails>
    // );
    
    // const starshipDetals = (
    //   <ItemDetails 
    //     itemId={5} 
    //     getData={getStarship}>
        
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //     <Record field="passengers" label="Passengers" />
         
    //   </ItemDetails>
    // );
    
    return (
      <div>
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}
        
        <Row 
          left={<PersonDetals itemId={1} />}
          right={<PlanetDetals itemId={11} />} />
          
      </div>
    );   
  }
}

