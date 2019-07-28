/* eslint-disable no-unused-vars */
import React from 'react';
import ItemList from '../item-list';
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from '../hoc-helpers';

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

const PersonList = compose(
  withSwapiService(mapPersonMetodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMetodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMetodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
