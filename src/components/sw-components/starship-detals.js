import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetals = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
      <Record field="passengers" label="Passengers" />
    </ItemDetails>
  );
};

const mapMetodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship
  };
};

export default withSwapiService(mapMetodsToProps)(StarshipDetals);
