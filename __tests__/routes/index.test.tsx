import * as React from 'react';
import {render} from '@testing-library/react-native';
import Routes from '../../src/routes';

describe('Routes screen renderer', () => {
  it('Initial screen is Home screen', () => {
    const {getByText} = render(<Routes />);
    expect(getByText('Components List')).toBeOnTheScreen();
  });
});
