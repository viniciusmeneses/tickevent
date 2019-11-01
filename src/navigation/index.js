import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import AuthSplashPage from '../pages/AuthSplash';
import AuthNavigator from './auth';
import AppNavigator from './app';

const RootNavigator = createAnimatedSwitchNavigator(
  {
    Splash: {
      screen: AuthSplashPage,
    },
    Auth: {
      screen: AuthNavigator,
    },
    App: {
      screen: AppNavigator,
    },
  },
  {}
);

const AppContainer = createAppContainer(RootNavigator);
export default AppContainer;
