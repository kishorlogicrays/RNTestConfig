/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {cleanup, render} from '@testing-library/react-native';

afterEach(cleanup);

describe('App component renderer', () => {
  it('renders correctly', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
