import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';

const Input = props => {
  const [value, setValue] = useState();

  return (
    <View
      onPress={() => props.onPress()}
      style={[globalStyles.backgroundWhite]}>
      {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        value={value}
        placeholder={props.placeholder ? props.placeholder : null}
        onChangeText={enteredValue => {
          setValue(enteredValue);
          props.onChangeText(enteredValue);
        }}
        style={style.inputElement}
        keyboardType={props.keyboardType ? props.keyboardType : null}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      />
    </View>
  );
};
export default Input;
