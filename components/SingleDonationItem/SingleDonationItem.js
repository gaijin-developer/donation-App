import React, {useRef, useState} from 'react';
import style from './style';

import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  //   const textInputRef = useRef(null);
  //   const [searchInput, setSearchInput] = useState('');

  //   const handleFocus = () => {
  //     textInputRef.current.focus();
  //   };
  //   const handleSearch = searchValue => {
  //     setSearchInput(searchValue);
  //     props.onSearch(searchValue);
  //   };

  return (
    <View style={style.singleDonationItemContainer}>
      <View>
        <View style={style.badgeContainer}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="contain"
          source={{uri: props.uri}}
          style={style.donationImage}
        />
      </View>
      <View style={[style.donationInfo]}>
        <Header title={props.donationTitle} type={3} color={'#0a043c'} />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156cf7'}
          />
        </View>
      </View>
    </View>
  );
};
export default SingleDonationItem;
