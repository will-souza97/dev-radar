import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
          headerStyle: {
            backgroundColor: '#7d40e7',
          },
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Perfil no Github',
          headerStyle: {
            backgroundColor: '#24292e',
            shadowOpacity: 0,
            elevation: 0,
          },
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
