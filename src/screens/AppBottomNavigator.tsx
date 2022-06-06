import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeJobs} from './Home/HomeJobs';
import {ButtonNotificationHeades} from '../components/Buttons/ButtonNotificationHeades';
import {ButtonProfile} from '../components/Buttons/ButtonProfile';
import {TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/Header/HeaderTitle';
import {HomePost} from './Post/HomePost';
import {NewJobs} from './Jobs/NewJobs';
import {HomeMessage} from './HomeChat/HomeMessage';
import {HomeSavedJobs} from './Jobs/HomeSavedJobs';
Icon.loadFont();

const Tab = createBottomTabNavigator();

export const AppBottomNavigator = () => {
  const [activo, setActivo] = useState(false);
  const screenOptions = (route: any, color: string) => {
    let iconName: string = '';
    switch (route.name) {
      case 'HomeJobs':
        iconName = 'home-outline';
        break;
      case 'HomePost':
        iconName = 'vector-square-edit';
        break;
      case 'NewJobs':
        iconName = 'plus';
        break;
      case 'HomeMessage':
        iconName = 'message-outline';
        break;
      case 'HomeSavedJobs':
        iconName = 'bookmark-outline';
        break;
    }
    return <Icon name={iconName} color={color} size={wp(6.5)} />;
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeJobs"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarActiveTintColor: '#130160',

        tabBarInactiveTintColor: '#A49EB5',
        //tabBarItemStyle:{borderTopLeftRadius: 20, borderTopRightRadius: 20},
        // tabBarItemStyle: {borderRadius: 25},
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 10,
          right: 10,
          elevation: 5,
          backgroundColor: '#FFF',
          borderRadius: 25,
          height: wp(15),
          paddingBottom: wp(1),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
      })}>
      <Tab.Screen
        name="HomeJobs"
        component={HomeJobs}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
            
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(3), width: wp(38)}}>
              <ButtonProfile />
            </View>
          ),
          headerTitle: props => (
              <HeaderTitle texto="Home" />
          ),
          headerRight: props => <ButtonNotificationHeades />,
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomePost"
        component={HomePost}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(3), width: wp(38)}}>
              <ButtonProfile />
            </View>
          ),
          headerTitle: props => <HeaderTitle texto="Post" />,
          headerRight: props => <ButtonNotificationHeades />,
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="NewJobs"
        component={NewJobs}
        options={() => ({
          tabBarButton: props => (
            <TouchableOpacity
              style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E8505B',
                width: wp(16),
                height: wp(16),
                borderRadius: wp(8),
              }}
              /*  onPress={()=> {
                  navigation.navigate('CreateNewEvent')
                }} */
            >
              <Icon name={'plus'} color={'white'} size={wp(8)} />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(2), width: wp(38)}}>
              <ButtonProfile />
            </View>
          ),
          headerTitle: props => <HeaderTitle texto="Create Event" />,
          headerRight: props => <ButtonNotificationHeades />,
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomeMessage"
        component={HomeMessage}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(3), width: wp(34)}}>
              <ButtonProfile />
            </View>
          ),
          headerTitle: props => <HeaderTitle texto="Messages" />,
          headerRight: props => <ButtonNotificationHeades />,
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomeSavedJobs"
        component={HomeSavedJobs}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(3), width: wp(33)}}>
              <ButtonProfile />
            </View>
          ),
          headerTitle: props => <HeaderTitle texto="Saved Jobs" />,
          headerRight: props => <ButtonNotificationHeades />,
          headerTransparent: false,
        })}
      />
    </Tab.Navigator>
  );
};
