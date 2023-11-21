import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  singleDonationItemContainer: {
    borderWidth: 2,
    marginTop: verticalScale(5),
  },
  donationImage: {
    width: horizontalScale(140),
    height: verticalScale(170),
  },
  badgeContainer: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInfo: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});
export default style;
