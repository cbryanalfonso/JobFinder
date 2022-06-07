import React from 'react'
import { TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../../Hooks/navigations/exportNavigation';
import { useNavigation } from '@react-navigation/core';

interface Props{
    onPress?: ()=>void;
    style: string;
    addStyle?: any;
    colorIcon?: string;
}

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const ButtonBack = ({onPress, style, addStyle,colorIcon}:Props) => {
    const navigation = useNavigation<navigationHeader>();
  return (
   <TouchableOpacity
    onPress={()=>navigation.goBack()}
    style={[getButtonStyle(style) as any,  addStyle ? addStyle : null]}
   >
       <Icon
            name='chevron-left'
            size={wp(8)}
            color={colorIcon ? colorIcon : '#FFF'}
       />
   </TouchableOpacity>
  )
}

const getButtonStyle = (color: any) => {
    switch (color) {
      case 'buttonBackProfile':
        return {
            width: wp(10), 
            height: wp(10), 
            borderRadius: wp(5),
            borderWidth: 1,
            borderColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center'
                };
      case 'buttonBackAboutMe':
        return {
            width: wp(10), 
            height: wp(10), 
            borderRadius: wp(5),
            justifyContent: 'center',
            alignItems: 'center'
        };
      case 'buttonEditProfile':
        return {
          borderWidth: 1,
          borderColor: '#FFF',
          paddingVertical: wp(2),
          paddingHorizontal: wp(2),
          //marginVertical: wp(6),
          borderRadius: wp(2),
        };
  
      default:
        return {
          color: '#FFFFFF',
          fontSize: 25,
        };
    }
  };
