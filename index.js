import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
    'Require cycle',
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead."
]);
AppRegistry.registerComponent(appName, () => App);
