import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from '../pages/Home';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
    },
  },
  {
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

export default AppNavigator;
