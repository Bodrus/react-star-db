import React, { Component } from 'react';
import Row from '../row';
import { PlanetList, PlanetDetals } from '../sw-components';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetals itemId={selectedItem} />}
      />
    );
  }
}
