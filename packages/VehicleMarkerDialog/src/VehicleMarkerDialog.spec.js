import React from 'react';
import renderer from 'react-test-renderer';
import VehicleMarkerDialog from './VehicleMarkerDialog'

it('renders correctly', () => {
  const tree = renderer
    .create(<VehicleMarkerDialog />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
