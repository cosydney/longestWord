import { AppRegistry } from 'react-native';
import App from './src/containers/App';
import RootNavigator from './src/router/Routes'

AppRegistry.registerComponent('longestWord', () => RootNavigator);
