import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  } else {
    return 350;
  }
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const guideLineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  } else {
    return 680;
  }
};

const verticalScale = size => (height / guideLineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    430;
  } else {
    return 400;
  }
};
const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);
export {horizontalScale, verticalScale, scaleFontSize};
