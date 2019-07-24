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
import Row from '../row';

import { SwapiServiceProvider } from '../swapi-service-context';

import { PersonDetals, PlanetDetals, StarshipDetals } from '../sw-components';

import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiServece();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header />
          <RandomPlanet />
          <PeoplePage />

          <Row
            left={<PersonDetals itemId={1} />}
            right={<PlanetDetals itemId={11} />}
          />
        </div>
      </SwapiServiceProvider>
    );
  }
}
