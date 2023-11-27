import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: horizontalScale(44),
    height: horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
export default style;
