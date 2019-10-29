import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
  },
  Register: {
    screen: RegisterPage,
  },
});

export default AuthNavigator;
