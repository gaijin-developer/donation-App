import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';
import Routes from '../../navigation/Routes';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(null);
  const [failed, setFailed] = useState(null);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={{marginLeft: 7}}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        contentContainerStyle={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View style={style.header}>
            <Header type={1} title={'Hello and Welcome !'} />
          </View>
          <View style={style.header}>
            <Input
              label={'First & Last Name'}
              placeholder={'Please enter your email'}
              onChangeText={val => setFullName(val)}
              keyboardType={'email-address'}
              secureTextEntry={false}
            />
          </View>
          <View style={style.header}>
            <Input
              label={'Email'}
              placeholder={'Please enter your email'}
              onChangeText={val => setEmail(val)}
              keyboardType={'email-address'}
              secureTextEntry={false}
            />
          </View>
          <View style={style.header}>
            <Input
              label={'Password'}
              placeholder={'****'}
              onChangeText={val => setPassword(val)}
              secureTextEntry={true}
            />
          </View>
          {(failed || success) && (
            <Text style={failed ? style.infoSection : style.succeeded}>
              {success}
              {failed}
            </Text>
          )}
          <View style={style.header}>
            <Button
              isDisabled={fullName && password && email.length > 7}
              title={'Register'}
              onPress={async () => {
                const user = await createUser(fullName, email, password);
                if (user.error) {
                  setSuccess(null);
                  setFailed(user.error);
                } else {
                  setFailed(null);
                  setSuccess('You have successFully registered your account');
                  setTimeout(() => navigation.goBack(), 2000);
                }
              }}
            />
          </View>

          <Pressable style={style.noAccount}>
            <Header
              type={3}
              title={'Already have an account?'}
              color={'#156cf7'}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Registration;
