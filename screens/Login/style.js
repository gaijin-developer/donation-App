import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: verticalScale(120),
  },
  contentContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(12),
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'red',
  },
  header: {
    marginBottom: verticalScale(24),
  },
  noAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoSection: {
    color: 'red',
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
  succeeded: {
    color: 'green',
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
});
export default style;
