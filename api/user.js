import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {upDateToken} from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  //   console.log(email, password);
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'email in use'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'please enter a valid email'};
    } else {
      return {error: 'something went wrong'};
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        emailAddress: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'please enter the correct password'};
    }
    return {status: false, error: error.message};
  }
};

export const logOut = async () => await auth().signOut();
export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    store.dispatch(upDateToken(response));
    return response;
  } catch (e) {
    return e.message;
  }
};
