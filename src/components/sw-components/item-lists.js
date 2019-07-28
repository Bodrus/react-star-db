/* eslint-disable no-unused-vars */
import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMetodToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMetodToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMetodToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMetodToProps
);

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMetodToProps
);

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapStarshipMetodToProps
);

export { PersonList, PlanetList, StarshipList };
