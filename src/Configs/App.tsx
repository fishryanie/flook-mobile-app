import { Platform, Dimensions, NativeModules } from 'react-native';

const { width, height } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;

const appConfigs = {
  DEFAULT_WIDTH: Platform.OS === 'ios' ? 375 : 375,
  DEFAULT_HEIGHT: Platform.OS === 'ios' ? 812 : 812,
  FULL_WIDTH: width,
  FULL_HEIGHT: height,
  STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT,
};

// ./gradlew :newapp:assembleRelease   Build realese android

export default appConfigs;


