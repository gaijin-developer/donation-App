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
import {useDispatch} from 'react-redux';
import {logIn, resetToInitialState} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(null);
  const [failed, setFailed] = useState(null);
  const dispatch = useDispatch();

  // dispatch(resetToInitialState());
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        contentContainerStyle={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View style={style.header}>
            <Header type={1} title={'Welcome Back'} />
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
              secureTextEntry={false}
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
              title={'login'}
              isDisabled={email && password ? true : false}
              onPress={async () => {
                const response = await loginUser(email, password);
                if (!response.status) {
                  setFailed(response.error);
                } else {
                  setFailed(null);
                  setSuccess('Welcome to the donation app');
                  dispatch(logIn.apply(response.data));
                  setTimeout(() => navigation.navigate(Routes.Home), 2000);
                }
              }}
            />
          </View>

          <Pressable
            style={style.noAccount}
            onPress={() => navigation.navigate(Routes.Registration)}>
            <Header
              type={3}
              title={"Don't have an account? "}
              color={'#156cf7'}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
