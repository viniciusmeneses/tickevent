import { createStackNavigator } from 'react-navigation-stack';

import StackLabel from '../components/StackLabel';

import SearchPage from '../pages/Search';
import DetailsPage from '../pages/Details';
import TabsNavigator from './tabs';

const stackOptions = {
  headerTintColor: '#fff',
  headerTitle: StackLabel,
  headerStyle: {
    backgroundColor: '#FF5757',
  },
};

const AppNavigator = createStackNavigator(
  {
    App: {
      screen: TabsNavigator,
    },
    Search: {
      screen: SearchPage,
      navigationOptions: { ...stackOptions, title: 'Buscar Eventos' },
    },
    EventDetails: {
      screen: DetailsPage,
      navigationOptions: stackOptions,
      params: { type: 'Event' },
    },
    TicketDetails: {
      screen: DetailsPage,
      navigationOptions: stackOptions,
      params: { type: 'Ticket' },
    },
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
  }
);

export default AppNavigator;
