import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ConteudoRoutes} from './conteudo.routes';
import {Favoritos} from '../screens/Favoritos';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Filmes"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
          shadowColor: 'transparent',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#eeeeee',
          fontSize: 20,
        },
        tabBarStyle: {
          backgroundColor: '#323232',
          borderTopColor: 'transparent',
          paddingBottom: 10,
          paddingTop: 15,
          height: 60,
        },
        tabBarActiveTintColor: '#eeeeee',
        tabBarInactiveTintColor: '#8c8c8c',
      }}>
      <Tab.Screen
        name="Filmes"
        component={ConteudoRoutes}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="movie-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
