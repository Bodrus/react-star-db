import React, { Component } from 'react';
import Row from '../row';
import { StarshipList, StarshipDetals } from '../sw-components';

export default class StarshipsPage extends Component {
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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetals itemId={selectedItem} />}
      />
    );
  }
}
