import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../../src/screens/Login';

describe('Login screen renderer', () => {
  it('Fill email input', async () => {
    const {getByTestId, getByText} = render(<Login />);
    // Get email value in state from login screen.

    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');

    // Initially state value is null|empty
    console.log('emailValue ----', emailInput.props.value);

    // Values update from the test file.
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'Test@123');

    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('Test@123');
  });
});
