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
      tabStyle: {
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: 18,
      },
      showIcon: false,
    },
  }
);

export default AppNavigator;
