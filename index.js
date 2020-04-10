import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import { name as appName } from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
// eslint-disable-next-line global-require
TrackPlayer.registerPlaybackService(() => require('./src/services/player'));
