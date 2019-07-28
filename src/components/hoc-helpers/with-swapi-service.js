import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = mapMetodsToprops => Wrapeped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMetodsToprops(swapiService);
          return <Wrapeped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
