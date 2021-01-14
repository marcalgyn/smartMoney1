import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import Welcome from './pages/Welcome';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import Loading from './pages/Loading';

const Routes = createAppContainer(

  createSwitchNavigator(
    {
      Loading,
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Loading',
      backBehavior: 'history',
    },
  ),

    createSwitchNavigator(
        {
            Welcome,
            Main,
            NewEntry,
            Report,
        },
        {
            initialRouteName: 'Welcome',
            backBehavior: 'history',
        },
    ),

);

export default Routes;
