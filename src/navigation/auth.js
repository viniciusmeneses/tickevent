import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

const AuthNavigator = createStackNavigator(
  {
    Login: LoginPage,
    Register: RegisterPage,
  },
  {
    headerMode: 'none',
  }
);

export default AuthNavigator;
