import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import AuthSplashPage from '../pages/AuthSplash';
import AuthNavigator from './auth';
import AppNavigator from './app';

const RootNavigator = createAnimatedSwitchNavigator(
  {
    Splash: AuthSplashPage,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {}
);

const AppContainer = createAppContainer(RootNavigator);
export default AppContainer;
