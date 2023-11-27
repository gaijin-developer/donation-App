import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  headerIntroText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(15),
    color: '#636776',
  },
  header: {
    margintop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: verticalScale(5),
  },
  userImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  resizeImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
  },
  donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: horizontalScale(5),
  },
  singleDonationItem: {
    maxWidth: '48%',
    marginBottom: verticalScale(18),
  },
});
export default style;
