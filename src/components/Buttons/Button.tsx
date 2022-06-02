import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props{
    style: string;
    text: string;
    addStyle?: any;
    addTxtStyle?: any
    image?: boolean;
    onPress?: ()=>void;
}

export const ButtonUI = ({style, text, addStyle, addTxtStyle,image,onPress}: Props) => {
  return (
   <TouchableOpacity
    style={[
        getButtonStyle(style) as any , 
        addStyle ? addStyle : null, 
        image ? 
        {flexDirection: 'row', justifyContent: 'space-evenly'} 
        : null ]}
        onPress={onPress}
   >
       {image ?
        <Image
            source={require('../../assets/images/google.png')}
            style={{width: wp(5), height: wp(5), marginRight: wp(-10)}}
            resizeMode='contain'
        />  : null 
    }
       <Text style={[getTextStyle(style) as any , addTxtStyle ? addTxtStyle : null]} >{text}</Text>

   </TouchableOpacity>
  )
}
const getButtonStyle = (color: any) => {
    switch (color) {
        case 'buttonCommonLR':
            return{
                backgroundColor: '#130160',
                width: wp(80),
                paddingVertical: wp(4),
                marginVertical: wp(6),
                borderRadius: wp(2)
            }
            case 'buttonCommonGoogle':
                return{
                    backgroundColor: '#D6CDFE',
                    width: wp(80),
                    paddingVertical: wp(4),
                    marginVertical: wp(6),
                    borderRadius: wp(2)
                }
      
      default:
        return {
          color: '#FFFFFF',
          fontSize: 25,
        };
    }
  };
  

const getTextStyle = (color: any) => {
    switch (color) {
        case 'buttonCommonLR':
              return {
                color: '#FFF',
            fontWeight: 'bold',
                fontSize: wp(4),
                alignSelf: 'center',
              };
              case 'buttonCommonGoogle':
                return {
                  color: '#FFF',
                 // color: '#130160',
              fontWeight: 'bold',
                  fontSize: wp(4),
                  alignSelf: 'center',
                };
            case 'txtForgotPassword':
              return {
                color: '#0D0140',
                fontSize: wp(3),
                alignSelf: 'flex-end',
                marginRight: wp(6),
                textDecorationLine: 'underline',
              };
      
      default:
        return {
          color: '#FFFFFF',
          fontSize: 25,
        };
    }
  };
  