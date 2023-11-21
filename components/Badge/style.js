import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    justifyContent: 'center',
    height: verticalScale(22),
    borderRadius: horizontalScale(50),
  },
  badgeText: {
    color: 'white',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    textAlign: 'center',
    lineHeight: verticalScale(12),
  },
});
export default style;
