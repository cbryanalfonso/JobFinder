import React from 'react';
import {useApp} from '../Hooks/App/useApp';
import { HomeJobs } from './Home/HomeJobs';
import { StartScreen } from './common/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainStackAuth = createNativeStackNavigator();
const MainStackNoAuth = createNativeStackNavigator();

export const AppNavigator = () => {
  const {user} = useApp();
  const stackAuth = () => 
  <MainStackAuth.Navigator>
    <MainStackAuth.Screen name='HomeJobs' component={HomeJobs} />
  </MainStackAuth.Navigator>;
  const stackNoAuth = () => (
    <MainStackNoAuth.Navigator>
      <MainStackNoAuth.Screen name='StartScreen' component={StartScreen} options={{
        headerShown: false,
      }} />
    </MainStackNoAuth.Navigator>
  );

  return (
    <NavigationContainer>
      {user ? stackAuth() : stackNoAuth()}
    </NavigationContainer>
  );
};
