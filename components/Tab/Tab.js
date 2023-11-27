import React, {useRef, useState} from 'react';
import style from './style';

import PropTypes from 'prop-types';
import {Text, View, Pressable} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';
import {useDispatch} from 'react-redux';
import {categoryActions} from '../../redux/reducers/Categories';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();

  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[style.tab, props.isInactive && style.isInactive, tabWidth]}
      // disabled={props.isInactive}
      onPress={value =>
        dispatch(categoryActions.updateSelectedCatgoryId(props.tabId))
      }>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.tabText, props.isInactive && style.inactiveText]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
export default Tab;
