import React from 'react';
import style from './style';

import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.titleOne;
      case 2:
        return style.titleTwo;
      case 3:
        return style.titleThree;
      case 4:
        return style.titleFour;
      default:
        return style.titleOne;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), props.color && {color: props.color}]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
        {props.title}
      </Text>
    </View>
  );
};
export default Header;
