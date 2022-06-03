import React from 'react'
import { TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../../Hooks/navigations/exportNavigation';
import { useNavigation } from '@react-navigation/core';

interface Props{
    onPress?: ()=>void;
}

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const ButtonBack = ({onPress}:Props) => {
    const navigation = useNavigation<navigationHeader>();
  return (
   <TouchableOpacity
    onPress={()=>navigation.goBack()}
    style={{width: wp(10), height: wp(10), borderRadius: wp(5),
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
        }}
   >
       <Icon
            name='chevron-left'
            size={wp(8)}
            color={'#FFF'}
       />
   </TouchableOpacity>
  )
}
