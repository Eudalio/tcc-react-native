/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import CameraScreen from './pages/Camera';
import LocationScreen from './pages/Location';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Comparativo entre frameworks',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F42B2B',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Usuário"
          component={ProfileScreen}
          options={{
            title: 'Usuário',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F42B2B',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Câmera"
          component={CameraScreen}
          options={{
            title: 'Câmera',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F42B2B',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Localização"
          component={LocationScreen}
          options={{
            title: 'Localização',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F42B2B',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
