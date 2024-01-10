import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Home from '../../src/screens/Home';

describe('Home screen renderer', () => {
  it('Checking Heading', () => {
    const {getByText} = render(<Home />);
    expect(getByText('Components List')).toBeTruthy();
  });

  it('Navigate Counter screen', () => {
    const {getByText} = render(<Home />);
    fireEvent.press(getByText('Counter'));
    expect(getByText('Counter')).toBeOnTheScreen();
  });
});
