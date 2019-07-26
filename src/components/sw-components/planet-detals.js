import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetals = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMetodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet
  };
};
export default withSwapiService(PlanetDetals, mapMetodsToProps);
