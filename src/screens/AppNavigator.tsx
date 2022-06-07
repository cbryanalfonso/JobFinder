import React from 'react';
import {useApp} from '../Hooks/App/useApp';
import { HomeJobs } from './Home/HomeJobs';
import { StartScreen } from './common/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackParamListAuth } from '../Hooks/navigations/exportNavigation';
import { LoginScreen } from './common/LoginScreen';
import { RegisterScreen } from './common/RegisterScreen';
import { AppBottomNavigator } from './AppBottomNavigator';
import { Notifications } from './HomeProfile/Notifications';
import { HomeProfile } from './HomeProfile/HomeProfile';
import { StatusBar } from 'react-native';
import AboutMe from './HomeProfile/AboutMe';

const MainStackAuth = createNativeStackNavigator<RootStackParamListAuth>();
const MainStackNoAuth = createNativeStackNavigator<RootStackParamList>();
 
export const AppNavigator = () => {
  const {user} = useApp();
  const stackAuth = () => 
  <MainStackAuth.Navigator>
    <MainStackAuth.Screen name='AppBottom' component={AppBottomNavigator} options={{headerShown: false}}  />
    <MainStackAuth.Screen name='Notifications' component={Notifications}  />
    <MainStackAuth.Screen name='Profile' component={HomeProfile} options={{headerShown: false}} />
    <MainStackAuth.Screen  name='AboutMe' component={AboutMe} options={{headerShown: false}} />
    
  </MainStackAuth.Navigator>;
  const stackNoAuth = () => (
    <MainStackNoAuth.Navigator>
      <MainStackNoAuth.Screen name='StartScreen' component={StartScreen} options={{
        headerShown: false,
      }} />
       <MainStackNoAuth.Screen name='LoginScreen' component={LoginScreen} options={{
        headerShown: false,
      }} />
       <MainStackNoAuth.Screen name='RegisterScreen' component={RegisterScreen} options={{
        headerShown: false,
      }} />
     </MainStackNoAuth.Navigator>
  );

  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
    <NavigationContainer>
      {user ? stackAuth() : stackNoAuth()}
    </NavigationContainer>
    </>
  );
};
