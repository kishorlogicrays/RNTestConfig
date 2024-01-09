import * as React from 'react';
import {render} from '@testing-library/react-native';
import Routes from '../../src/routes';

describe('Routes screen renderer', () => {
  it('Should render first (home) screen', () => {
    const {getByText} = render(<Routes />);
    expect(getByText(/data/i)).toBeOnTheScreen();
  });
});
