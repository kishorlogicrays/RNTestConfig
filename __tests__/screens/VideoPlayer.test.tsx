import {fireEvent, render} from '@testing-library/react-native';
import VideoPlayer from '../../src/screens/VideoPlayer';

// Mock the react-native-video module
jest.mock('react-native-video', () => 'Video');

describe('Video screen renderer', () => {
  it('renders video player with the correct source', () => {
    const url =
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4';
    const {getByTestId} = render(<VideoPlayer />);

    // Assert that the video player is rendered
    const videoPlayer = getByTestId('VideoId');
    expect(videoPlayer).toBeDefined();

    // Checking loaded url is correct or not
    const loadUrl = videoPlayer?.props?.source?.uri;
    expect(url).toEqual(loadUrl);
  });

  it('Check functionality', async () => {
    const {getByTestId, getByText, getByLabelText} = render(<VideoPlayer />);
    const videoPlayer = getByTestId('VideoId');

    fireEvent.press(getByText(/pause/i));
    fireEvent.press(getByText(/full screen/i));

    const loadUrl = videoPlayer?.props;
    expect(loadUrl?.paused).toEqual(true);
    expect(loadUrl?.fullscreen).toEqual(true);

    expect(videoPlayer).toHaveStyle({width: '100%', height: 240});
  });
});
