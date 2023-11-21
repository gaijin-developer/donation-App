import React, {useRef, useState} from 'react';
import style from './style';

import {Text, View} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.badgeText]}>
        {props.title}
      </Text>
    </View>
  );
};
export default Badge;
