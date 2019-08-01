/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiServece from '../../services/swapi-service';
import DummySwapiServece from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Router>
          <div>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
