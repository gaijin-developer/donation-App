import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979f2',
    justifyContent: 'center',
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
  },
  isDisabled: {
    opacity: 0.5,
  },
  inactiveText: {
    color: '#79869F',
  },
  buttonText: {
    color: 'white',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(19),
    textAlign: 'center',
    lineHeight: verticalScale(55),
  },
});
export default style;
