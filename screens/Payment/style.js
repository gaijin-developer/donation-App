import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  paymentContainer: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    marginTop: verticalScale(120),
    marginHorizontal: horizontalScale(24),
  },
  button: {marginHorizontal: horizontalScale(24)},
  donationAmount: {
    marginTop: verticalScale(14),
  },
  CardForm: {
    height: verticalScale(200),
    marginTop: verticalScale(20),
  },
});
export default style;
