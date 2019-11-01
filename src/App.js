import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './navigation';
import AuthSplash from './pages/AuthSplash';

import navigationService from './services/navigation';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AuthSplash />}>
        <StatusBar backgroundColor="#ff5757" />
        <AppContainer
          ref={navigator => navigationService.setNavigator(navigator)}
        />
      </PersistGate>
    </Provider>
  );
}
