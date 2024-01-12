import {render, waitFor} from '@testing-library/react-native';
import FetchList from '../../src/screens/FetchList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import userList from './../data/UserList.json';
import {act} from 'react-test-renderer';

const mock = new MockAdapter(axios);

describe('Fetch-list renderer', () => {
  beforeEach(() => {
    // Reset the mock adapter state before each test
    mock.reset();
  });

  it('Should check loader on the screen ', () => {
    const {getByLabelText} = render(<FetchList />);
    const loaderLabel = getByLabelText('loader');
    expect(loaderLabel).toBeOnTheScreen();
  });

  it('Should check error on the screen ', async () => {
    const {getByLabelText} = render(<FetchList />);
    await waitFor(() => {
      const alertLabel = getByLabelText('alert');
      expect(alertLabel).toBeOnTheScreen();
    });
  });
});
