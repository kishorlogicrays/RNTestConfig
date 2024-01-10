import * as React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Counter from '../../src/screens/Counter';
import {act} from 'react-test-renderer';

/**
 * @act for asynchronous test
 */

describe('Counter value check', () => {
  it('Current value is 0', () => {
    const {getByTestId} = render(<Counter />);
    const counterValue = getByTestId('countValue');
    expect(counterValue).toHaveTextContent('0');
  });

  it('Press 2 time of + to value should 2', () => {
    const {getByText, getByTestId} = render(<Counter />);
    const plusButton = getByText('+');
    act(() => {
      fireEvent.press(plusButton);
    });
    act(() => {
      fireEvent.press(plusButton);
    });

    const counterValue = getByTestId('countValue');
    expect(counterValue).toHaveTextContent('2');
  });

  it('Press 1 time of - to value should 0', () => {
    const {getByText, getByTestId} = render(<Counter />);
    const minusButton = getByText('-');
    act(() => {
      fireEvent.press(minusButton);
    });

    const counterValue = getByTestId('countValue');
    expect(counterValue).toHaveTextContent('0');
  });

  // How to check perticular tag styles assigned or not ?
  it('Checking Plus button Styles', () => {
    const {getByText} = render(<Counter />);
    const plusButton = getByText('+');

    expect(plusButton).toHaveStyle({fontSize: 30});
  });

  it('Multiple action in only single test case', () => {
    const {getByTestId, getByText} = render(<Counter />);

    const countValue = getByTestId('countValue');
    expect(countValue).toHaveTextContent('0');
    act(() => {
      fireEvent.press(getByText('+'));
    });

    act(() => {
      fireEvent.press(getByText('+'));
    });

    expect(countValue).toHaveTextContent('2');

    act(() => {
      fireEvent.press(getByText('-'));
    });

    expect(countValue).toHaveTextContent('1');
  });

  // Getting the state value from the file in test case
  // it('Getting the state value ', async () => {
  //   const {getByTestId, getByText} = render(<Counter />);
  //   const countValue = await waitFor(() => getByTestId('countValue'));
  //   console.log('countValue --', countValue.props.children);
  //   expect(countValue.props.children).toBe(0);

  //   act(() => {
  //     fireEvent.press(getByText('+'));
  //   });
  //   act(() => {
  //     fireEvent.press(getByText('+'));
  //   });
  //   expect(countValue.props.children).toEqual(2);
  //   act(() => {
  //     fireEvent.press(getByText('-'));
  //   });
  //   console.log('countValue --', countValue.props.children);
  //   expect(countValue.props.children).toBe(1);
  // });
});
