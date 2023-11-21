import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  titleOne: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  titleTwo: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  titleThree: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  titleFour: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
  },
});
export default style;
