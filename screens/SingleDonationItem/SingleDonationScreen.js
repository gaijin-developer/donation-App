import React, {useRef, useState} from 'react';
import style from './style';

import {
  Pressable,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalStyles';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Routes from '../../navigation/Routes';

const SingleDonationScreen = ({navigation, route}) => {
  const textInputRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');

  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInfo,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={style.arrowContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <View style={style.textContainer}>
          <Text text={style.textDescription}>
            {donationItemInformation.description}
            {donationItemInformation.description}
            {donationItemInformation.description}
          </Text>
        </View>
      </ScrollView>
      <View style={style.buttonContainer}>
        <Button
          title="Donate"
          onPress={() => {
            navigation.navigate(Routes.Payment);
          }}
          isDisabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationScreen;
