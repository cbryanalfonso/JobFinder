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
import { WorkExperience } from './HomeProfile/WorkExperience';
import { ButtonBack } from '../components/Buttons/ButtonBack';
import { backGroundScreenStart } from '../assets/styles/stylesGeneral';
import { CreatePostorJob } from './Post/CreatePostorJob';
import { HomeCompany } from './Company/HomeCompany'
import { RegisterCompany } from './Company/RegisterCompany';
import HomeResume from './HomeProfile/HomeResume';
import CreatePost from './Post/CreatePost';

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
    <MainStackAuth.Screen name='WorkExperience' component={WorkExperience} options={{
       headerStyle: {
        backgroundColor: backGroundScreenStart,
      },
      headerLeft: props => <ButtonBack style='buttonBackAboutMe' colorIcon='#3B4657' />,
      
    }}/>
    <MainStackAuth.Screen name='CreatePostorJob' component={CreatePostorJob} />
    <MainStackAuth.Screen name='HomeCompany' component={HomeCompany} options={{
       headerStyle: {
        backgroundColor: backGroundScreenStart,
      },
      headerLeft: props => <ButtonBack style='buttonBackAboutMe' colorIcon='#3B4657' />,
    }}
    />
    <MainStackAuth.Screen name='CreatePost' component={CreatePost} options={{
       headerStyle: {
        backgroundColor: backGroundScreenStart,
      },
      headerLeft: props => <ButtonBack style='buttonBackAboutMe' colorIcon='#3B4657' />,
    }}
    />
    <MainStackAuth.Screen name='RegisterCompany' component={RegisterCompany} options={{
      headerStyle: {
       backgroundColor: backGroundScreenStart,
     },
     headerLeft: props => <ButtonBack style='buttonBackAboutMe' colorIcon='#3B4657' />,
   }}
    />

    <MainStackAuth.Screen name='HomeResume' component={HomeResume}  options={{
      headerStyle: {
       backgroundColor: backGroundScreenStart,
     },
     headerLeft: props => <ButtonBack style='buttonBackAboutMe' colorIcon='#3B4657' />,
   }} />
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
