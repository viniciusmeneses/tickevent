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
      inactiveTintColor: '#c7c7c7',
      style: {
        borderTopColor: '#dfdfdf',
      },
      showIcon: false,
    },
  }
);

export default AppNavigator;
