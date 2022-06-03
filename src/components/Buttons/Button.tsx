import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  style: string;
  text: string;
  addStyle?: any;
  addTxtStyle?: any;
  image?: boolean;
  onPress?: () => void;
  iconRight?: boolean;
  iconName?: string;
}

export const ButtonUI = ({
  style,
  text,
  addStyle,
  addTxtStyle,
  image,
  onPress,
  iconName,
  iconRight,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        getButtonStyle(style) as any,
        addStyle ? addStyle : null,
        image || iconRight
          ? {flexDirection: 'row', justifyContent: 'space-evenly'}
          : null,
      ]}
      onPress={onPress}>
      {image ? (
        <Image
          source={require('../../assets/images/google.png')}
          style={{width: wp(5), height: wp(5), marginRight: wp(-10)}}
          resizeMode="contain"
        />
      ) : null}
      <Text
        style={[getTextStyle(style) as any, addTxtStyle ? addTxtStyle : null]}>
        {text}
      </Text>
      {iconRight ? <Icon name={iconName ? iconName : 'pencil'} size={wp(5)} color="#FFF" style={{marginLeft: wp(2)}} /> : null}
    </TouchableOpacity>
  );
};
const getButtonStyle = (color: any) => {
  switch (color) {
    case 'buttonCommonLR':
      return {
        backgroundColor: '#130160',
        width: wp(80),
        paddingVertical: wp(4),
        marginVertical: wp(6),
        borderRadius: wp(2),
      };
    case 'buttonCommonGoogle':
      return {
        backgroundColor: '#D6CDFE',
        width: wp(80),
        paddingVertical: wp(4),
        marginVertical: wp(6),
        borderRadius: wp(2),
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
    case 'buttonEditProfile':
      return {
        color: '#FFF',
        // color: '#130160',
       // fontWeight: 'bold',
        fontSize: wp(3.5),
       // alignSelf: 'center',
      };

    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};
