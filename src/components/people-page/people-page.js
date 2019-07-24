/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import SwapiServece from '../../services/swapi-service';
import Row from '../row';
import {
  PersonDetals,
  PlanetDetals,
  StarshipDetals,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiServece();

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id + 1 });
  };

  render() {
    const itemList = (
      <>
        <PersonList onItemSelected={this.onPersonSelected} />

        <StarshipList onItemSelected={this.onPersonSelected} />
      </>
    );

    return (
      <ErrorBoundry>
        <Row
          left={itemList}
          right={<PersonDetals itemId={this.state.selectedPerson} />}
        />
      </ErrorBoundry>
    );
  }
}
