import React from 'react';
import { View } from 'react-native';

import TabBarLabel from '../../components/TabBarLabel';

export default function Home() {
  return <View />;
}

Home.navigationOptions = {
  tabBarLabel: props => <TabBarLabel {...props}>Home</TabBarLabel>,
};
