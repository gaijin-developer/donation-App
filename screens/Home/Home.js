import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState} from '../../redux/reducers/User';
import {donationActions} from '../../redux/reducers/Donation';
import Routes from '../../navigation/Routes';
import {logOut} from '../../api/user';

const Home = ({navigation}) => {
  const userName = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const [donationItems, setDonationItems] = useState([]);

  const dispatch = useDispatch();
  //   dispatch(resetToInitialState());
  //   console.log(donationItems);

  useEffect(() => {
    const items = donations.items;

    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.headerContainer}>
              <Header title={userName.displayName + ' '} type={1} />
            </View>
          </View>
          <View>
            <Pressable onPress={() => navigation.navigate(Routes.Login)}>
              <Image
                source={{uri: userName.profileImage}}
                style={style.userImage}
                resizeMode={'contain'}
              />
            </Pressable>
            <Pressable
              onPress={async () => {
                await logOut();
                dispatch(resetToInitialState());
              }}>
              <Header type={3} title={'logout'} />
            </Pressable>
          </View>
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            style={style.resizeImage}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View styele={style.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => (
              <View key={item.categoryId} style={style.categoryItem}>
                <Tab
                  title={item.name}
                  tabId={item.categoryId}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(donation => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );

              return (
                <View
                  key={donation.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    uri={donation.image}
                    donationItemId={donation.donationItemId}
                    donationTitle={donation.name}
                    price={parseFloat(donation.price)}
                    onPress={donationId => {
                      dispatch(
                        donationActions.updateSelectedDonationId(donationId),
                      );
                      navigation.navigate(Routes.SingleDonation, {
                        categoryInformation,
                      });
                    }}
                    badgeTitle={categoryInformation.name}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
