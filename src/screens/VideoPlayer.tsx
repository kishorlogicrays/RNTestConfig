import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';

const VideoPlayer = (props: any) => {
  const [isPause, setIsPause] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Video
        accessibilityLabel={'video-player'}
        testID="VideoId"
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        }}
        style={[styles.videoStyles, {height: isFullScreen ? 240 : 160}]}
        resizeMode="contain"
        paused={isPause}
        fullscreen={isFullScreen}
        onError={e => console.log('error', e)}
      />

      <TouchableOpacity
        testID="onTouch"
        style={styles.pauseContainer}
        onPress={() => setIsPause(!isPause)}>
        <Text style={styles.textStyles}>{isPause ? 'Continue' : 'Pause'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pauseContainer}
        onPress={() => setIsFullScreen(!isFullScreen)}>
        <Text style={styles.textStyles}>
          {isFullScreen ? 'Exit Full screen' : 'Full Screen'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoStyles: {
    width: '100%',
    height: 240,
  },
  pauseContainer: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#add259',
  },
  textStyles: {
    color: '#000',
    fontWeight: '500',
  },
});

export default VideoPlayer;
