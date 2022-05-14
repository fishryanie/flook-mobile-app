import { Dimensions, StatusBar } from 'react-native';

export const TEXT_INPUT_HEIGHT = 64;
export const BUTTON_HEIGHT = 61;
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const fullHeight = height + Number(StatusBar.currentHeight);
