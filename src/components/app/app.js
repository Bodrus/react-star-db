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
import DummySwapiServece from '../../services/dummy-swapi-service';
import Row from '../row';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends React.Component {
  state = {
    hasError: false,
    swapiService: new SwapiServece()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiServece ? DummySwapiServece : SwapiServece;
      console.log('witcher to', Service);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div>
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <PeoplePage />
        </div>
      </SwapiServiceProvider>
    );
  }
}
