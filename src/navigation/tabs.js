import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarLabel from '../components/TabBarLabel';
import HomePage from '../pages/Home';
import FavoritesPage from '../pages/Favorites';
import TicketsPage from '../pages/Tickets';

const tabOptions = screenName => ({
  tabBarLabel: props => <TabBarLabel {...props}>{screenName}</TabBarLabel>,
});

const TabsNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomePage, navigationOptions: tabOptions('Home') },
    Favorites: {
      screen: FavoritesPage,
      navigationOptions: tabOptions('Favoritos'),
    },
    Tickets: {
      screen: TicketsPage,
      navigationOptions: tabOptions('Ingressos'),
    },
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
