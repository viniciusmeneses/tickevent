import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthSplashPage from '../pages/AuthSplash';
import AuthNavigator from './auth';
import AppNavigator from './app';

const RootNavigator = createSwitchNavigator({
  Splash: {
    screen: AuthSplashPage,
  },
  Auth: {
    screen: AuthNavigator,
  },
  App: {
    screen: AppNavigator,
  },
});

const AppContainer = createAppContainer(RootNavigator);
export default AppContainer;
