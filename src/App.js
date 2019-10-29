import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View>Tickevent</View>
    </Provider>
  );
}
