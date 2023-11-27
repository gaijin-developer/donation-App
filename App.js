import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {AppState} from 'react-native';
// import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import store, {persistor} from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import {checkToken} from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('returned to app');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
    console.log('application has rendered');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
