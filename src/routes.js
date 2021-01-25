import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigatior} from '@react-navigation/stack';

const Stack = createStackNavigatior();

import Loading from './pages/Loading';
import Main from './pages/Main';
import Welcome from './pages/Welcome';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const AppScreens = () => {
  return (
    <Stack.Navigatior
      screenOptions={{headerShown: false}}
      initialRouteName="Loading">
      <Stack.AppScreens name="Loading" component={Loading} />
      <Stack.AppScreens name="Welcome" component={Welcome} />
      <Stack.AppScreens name="Main" component={Main} />
      <Stack.AppScreens name="NewEntry" component={NewEntry} />
      <Stack.AppScreens name="Report" component={Report} />
    </Stack.Navigatior>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};

export default Routes;
