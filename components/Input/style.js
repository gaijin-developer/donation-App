import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455a',
  },
  inputElement: {
    borderBottomWidth: 1,
    paddingVertical: verticalScale(7),
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
});
export default style;
