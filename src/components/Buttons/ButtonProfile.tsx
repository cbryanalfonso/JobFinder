import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RootStackParamListAuth } from '../../Hooks/navigations/exportNavigation';

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>

export const ButtonProfile = () => {
    const navigation = useNavigation<navigationHeader>();
  return (
    <TouchableOpacity
        onPress={()=>{navigation.navigate('Profile')}}
    >
        <Image
            source={require('../../assets/images/profile.png')}
            style={{width: wp(10), height:wp(10)}}
            resizeMode='contain'
        />
    </TouchableOpacity>
  )
}
