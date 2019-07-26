import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetals = props => {
  return (
    <ItemDetails {...props}>
      {/* для работы Record ему нужно передать обьект item, который генериреться
        в Itemlist, для этого я копирую Record и добовляю ему свойство item  */}
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMetodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson
  };
};

export default withSwapiService(PersonDetals, mapMetodsToProps);
