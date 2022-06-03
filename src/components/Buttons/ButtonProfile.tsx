import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RootStackParamListAuth} from '../../Hooks/navigations/exportNavigation';
import { firebase as auth } from '@react-native-firebase/auth';

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

interface Props {
  edit?: boolean;
  onPress?: () => void;
  image?: string;
}

export const ButtonProfile = ({edit, onPress,image}: Props) => {
  const navigation = useNavigation<navigationHeader>();

  const [imagen, setImagen] = useState(auth.auth().currentUser?.photoURL);
  return (
    <>
      {edit ? (
        <TouchableOpacity
        onPress={onPress}
        style={{width: wp(20), alignItems: 'center'}}
         >
          <Image
            source={imagen ? {uri: imagen} : require('../../assets/images/profile.png')}
            style={{width: wp(20), height: wp(20), borderRadius: wp(8)}}
            resizeMode="center"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
       // style={{width: wp(20), alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            source={imagen ? {uri: imagen} : require('../../assets/images/profile.png')}
            style={{width: wp(10), height: wp(10), borderRadius: wp(8)}}
            resizeMode="center"
          />
        </TouchableOpacity>
      )}
    </>
  );
};
