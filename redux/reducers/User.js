import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  // firstName: 'Frank',
  // lastName: 'Entsie',
  // id: 1,
  isLoggedIn: false,
  email: 'complianceofficer22@gmail.com',
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn(state, action) {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    upDateToken(state, action) {
      state.token = action.payload;
    },
    resetToInitialState(state, action) {
      return initialState;
    },
  },
});
//export default
export const {logIn, resetToInitialState, upDateToken} = UserSlice.actions;
export default UserSlice;
