import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-easy-toast';

import AppContainer from './navigation';
import { store, persistor } from './store';

import navigationService from './services/navigation';
import toastService from './services/toast';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#ff5757" />
        <Toast
          ref={toast => toastService.setToast(toast)}
          fadeInDuration={0}
          fadeOutDuration={0}
          opacity={0.8}
        />
        <AppContainer
          ref={navigator => navigationService.setNavigator(navigator)}
        />
      </PersistGate>
    </Provider>
  );
}
