import React from 'react';
import style from './style';

import PropTypes from 'prop-types';
import {Text, View, Pressable} from 'react-native';

const Button = props => {
  return (
    <Pressable
      style={[style.button, props.isDisabled && style.isDisabled]}
      disabled={props.isDisabled}
      onPress={props.onPress}>
      <Text style={style.buttonText}> {props.title}</Text>
    </Pressable>
  );
};
export default Button;
