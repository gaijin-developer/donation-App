import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  arrowContainer: {
    marginTop: verticalScale(10),
  },
  image: {
    marginTop: verticalScale(12),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
    marginBottom: verticalScale(12),
  },
  badge: {marginBottom: verticalScale(16)},
  textContainer: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    marginBottom: verticalScale(20),
  },
  textDescription: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
  },
  buttonContainer: {
    marginHorizontal: horizontalScale(20),
  },
});
export default style;
