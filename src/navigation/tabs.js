import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarLabel from '../components/TabBarLabel';
import HomePage from '../pages/Home';

const tabOptions = screenName => ({
  tabBarLabel: props => <TabBarLabel {...props}>{screenName}</TabBarLabel>,
});

const TabsNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomePage, navigationOptions: tabOptions('Home') },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
    tabBarOptions: {
      activeTintColor: '#ff5757',
      inactiveTintColor: '#A1A1A1',
      style: {
        borderTopColor: '#dfdfdf',
        borderTopWidth: 1.5,
      },
      showIcon: false,
    },
  }
);

export default TabsNavigator;
