import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979f2',
    justifyContent: 'center',
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
  },
  isInactive: {
    opacity: 0.5,
    backgroundColor: '#f3f5f9',
  },
  inactiveText: {
    color: '#79869F',
  },
  tabText: {
    color: 'white',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(15),
    textAlign: 'center',
    lineHeight: verticalScale(17),
  },
});
export default style;
