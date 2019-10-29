import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './navigation';
import store from './store';
import navigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer
        ref={navigator => navigationService.setNavigator(navigator)}
      />
    </Provider>
  );
}
