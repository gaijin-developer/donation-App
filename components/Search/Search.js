import React, {useRef, useState} from 'react';
import style from './style';

import {Pressable, Text, TextInput, View} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = props => {
  const textInputRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = searchValue => {
    setSearchInput(searchValue);
    props.onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25c0ff'}
        size={scaleFontSize(22)}
      />

      <TextInput
        ref={textInputRef}
        placeholder={'Search'}
        style={[style.searchInput]}
        value={searchInput}
        onChange={value => {
          handleSearch(value);
        }}
      />
    </Pressable>
  );
};
export default Search;
