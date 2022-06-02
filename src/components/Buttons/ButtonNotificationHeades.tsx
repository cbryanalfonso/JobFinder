import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../../Hooks/navigations/exportNavigation';
import { useNavigation } from '@react-navigation/core';
Icon.loadFont()

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>

export const ButtonNotificationHeades = () => {
    const navigation = useNavigation<navigationHeader>();
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={()=> navigation.navigate('Notifications')}
    >
         <Icon name="bell" color="#363636" size={wp(5)} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      width: wp(11),
      alignItems: 'center',
      height: 40,
      justifyContent: 'center',
      borderRadius: 20,
    },
  });
