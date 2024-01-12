import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import FlatListData from '../../src/screens/FlatList';

jest.useFakeTimers();

it('scrolls to bottom and loads more items', async () => {
  render(<FlatListData />);
  // First dish is visible
  expect(screen.getByText(/pizza/i)).toBeOnTheScreen();

  // First dish from 2nd page is not visible yet
  expect(() => screen.getByText(/the impossible burger/i)).toThrow(
    'Unable to find an element with text: /the impossible burger/i',
  );

  // We haven't started loading yet
  expect(() => screen.getByText(/loading more dishes/i)).toThrow(
    'Unable to find an element with text: /loading more dishes/i',
  );
});

it('refreshes when scrolling to the top', async () => {
  render(<FlatListData />);

  // First dish is visible
  expect(screen.getByText(/pizza/i)).toBeOnTheScreen();

  const flatListTestInstance = screen.getByLabelText('dishes-list');
  const {refreshControl} = flatListTestInstance.props;
  await act(async () => {
    refreshControl.props.onRefresh();
  });

  expect(() => screen.getByText(/pizza/i)).toThrow(
    'Unable to find an element with text: /pizza/i',
  );
  await waitForElementToBeRemoved(() => screen.getByText(/refreshing/i), {
    timeout: 1500,
  });
});
