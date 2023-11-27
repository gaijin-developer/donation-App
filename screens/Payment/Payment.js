import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Routes from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, resetToInitialState} from '../../redux/reducers/User';
import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';

const Payment = ({navigation}) => {
  const [isReady, setIsReady] = useState(false);
  const user = useSelector(state => state.user);
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInfo,
  );

  const fetchPaymentIntentClientSecrete = async () => {
    try {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({
          email: 'complianceofficer22@gmail.com',
          currency: 'usd',
          amount: donationItemInformation.price * 100,
        }),
        header: {
          'Content-Type': 'application/json',
        },
      });
      const clientSecrete = await response.json();
      console.log(clientSecrete);
      return clientSecrete;
    } catch (err) {
      console.log(err, 'line 45');
    }
  };

  const dispatch = useDispatch();

  // dispatch(resetToInitialState());

  const {confirmPayment, loading} = useConfirmPayment();
  const handlePayment = async () => {
    const clientSecrete = await fetchPaymentIntentClientSecrete();
    return clientSecrete;
  };
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView style={style.paymentContainer}>
        <Header type={1} title={'Payment'} />
        <View style={style.donationAmount}>
          <Text>You are about to donate {donationItemInformation.price} </Text>
        </View>
        <View>
          <StripeProvider publishableKey={''}>
            <CardForm
              style={style.CardForm}
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          isDisabled={isReady || loading}
          onPress={async () => {
            const result = await handlePayment();
            console.log(result);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Payment;
