import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#f3f5f9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter', 'normal'),
    fontSize: scaleFontSize(14),
    color: '#686c7a',
  },
});
export default style;
