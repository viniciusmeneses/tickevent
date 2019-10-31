import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './navigation';
import navigationService from './services/navigation';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer
          ref={navigator => navigationService.setNavigator(navigator)}
        />
      </PersistGate>
    </Provider>
  );
}
