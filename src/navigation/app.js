import { createStackNavigator } from 'react-navigation-stack';

import StackLabel from '../components/StackLabel';
import SearchPage from '../pages/Search';

import TabsNavigator from './tabs';

const stackOptions = screenName => ({
  title: screenName,
  headerTintColor: '#fff',
  headerTitle: StackLabel,
  headerStyle: {
    backgroundColor: '#FF5757',
  },
});

const AppNavigator = createStackNavigator(
  {
    App: {
      screen: TabsNavigator,
    },
    Search: {
      screen: SearchPage,
      navigationOptions: stackOptions('Buscar Eventos'),
    },
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
  }
);

export default AppNavigator;
