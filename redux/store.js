import {combineReducers, configureStore} from '@reduxjs/toolkit';
import UserSlice from './reducers/User';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import Categories from './reducers/Categories';
import Donations from './reducers/Donation';

const rootReducer = combineReducers({
  user: UserSlice.reducer,
  categories: Categories.reducer,
  donations: Donations.reducer,
});
const configuration = {key: 'root', storage: AsyncStorage, version: 1};
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
    // .concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
//persistor.purge();
