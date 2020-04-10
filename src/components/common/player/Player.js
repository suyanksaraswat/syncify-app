import React, { useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer, {
  Capability,
  useProgress,
  usePlaybackState,
} from 'react-native-track-player';

function ProgressBar() {
  const progress = useProgress();
  console.log(progress);
  return (
    <View
      style={{
        height: 10,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#f0f',
        flexDirection: 'row',
      }}
    >
      <View
        style={{ flex: progress.position, backgroundColor: 'red' }}
      />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
}

export default function LandingScreen() {
  const playbackState = usePlaybackState();

  useEffect(() => {
    TrackPlayer.setupPlayer({ waitForBuffer: true });

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });

    TrackPlayer.add([
      {
        id: 'local-track',
        url:
          'https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/podcasts/5ce8ba48e11dd20017361691/listen',
        title: 'Pure (Demo)',
        artist: 'David Chavez',
        artwork: 'https://picsum.photos/200',
      },
    ]);

    TrackPlayer.play();
  }, []);

  return (
    <View
      testID="player"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      <ProgressBar />
    </View>
  );
}
