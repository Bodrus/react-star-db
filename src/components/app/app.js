import React from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-detals';
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        
        <div>
          <div className="row md2">
            <div className="col-md-6">
              <ItemList />
            </div>
            <div className="col-md-6">
              <PersonDetails />    
            </div>
          </div>
        </div>
      </div>
    );
  }
}