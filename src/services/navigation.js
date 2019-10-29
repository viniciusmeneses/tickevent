import { NavigationActions } from 'react-navigation';

let navigator;

const setNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) =>
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));

const goBack = () => navigator.dispatch(NavigationActions.goBack());

export default {
  setNavigator,
  navigate,
  goBack,
};
