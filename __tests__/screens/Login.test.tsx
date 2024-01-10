import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../../src/screens/Login';
import {act} from 'react-test-renderer';

describe('Login screen renderer', () => {
  it('Fill email input', async () => {
    const {getByTestId} = render(<Login />);
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

  it('Validated email input or password input is correct or not ? ', () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const {getByTestId, getByText} = render(<Login />);

    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');

    fireEvent.changeText(emailInput, 'valid@example.com');
    fireEvent.changeText(passwordInput, 'ValidPassword1!');

    act(() => {
      fireEvent.press(getByText('Login'));
    });

    expect(emailRegex.test(emailInput.props.value)).toBeTruthy();
    expect(passwordRegex.test(passwordInput.props.value)).toBeTruthy();
  });

  // Once fill wrong user-details and click on submit actions (Error below code)
  it('should submit button when user fill wrong details', async () => {
    const {getByTestId, getByText} = render(<Login />);

    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');

    fireEvent.changeText(emailInput, 'vekariyanayan2000@gmail.com');
    fireEvent.changeText(passwordInput, 'hey');

    // Wait for the asynchronous actions to complete
    await act(async () => {
      await expect(
        new Promise((resolve, reject) => {
          fireEvent.press(getByText('Login'));
          waitFor(async () => {
            try {
              expect(getByText('Invalid email address')).toBeTruthy();
              await expect(getByText('Invalid password')).toBeTruthy();
              resolve();
            } catch (error) {
              console.log('error -----', error);
              reject(error);
            }
          });
        }),
      ).rejects.toThrow('Invalid email address');
    });
  });
});
