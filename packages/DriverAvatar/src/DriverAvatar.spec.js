import React from 'react';
import renderer from 'react-test-renderer';
import DriverAvatar from './DriverAvatar'

it('renders correctly', () => {
  const tree = renderer
    .create(<DriverAvatar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
