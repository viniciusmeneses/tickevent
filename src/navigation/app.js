import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from '../pages/Home';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
  },
});

export default AppNavigator;
