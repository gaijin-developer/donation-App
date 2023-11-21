import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  singleDonationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: horizontalScale(15),
  },
});
export default style;
