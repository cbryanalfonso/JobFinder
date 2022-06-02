import React from 'react';
import {Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  texto: string;
  style: string;
  addStyle?: any;
  onPress?: ()=>void
}

export const TextUi = ({texto, style, addStyle, onPress}: Props) => {
  return (
    <>
      <Text 
      onPress={onPress}
      style={[getTextStyle(style) as any, addStyle ? addStyle : null]}>
        {texto}
      </Text>
    </>
  );
};

const getTextStyle = (color: any) => {
  switch (color) {
    case 'txtTitleStart':
      return {
        color: '#000000',
        fontSize: wp(8),
        fontWeight: 'bold',
      };
    case 'txtTitleStartNaranja':
      return {
        color: '#FCA34D',
        fontSize: wp(8),
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      };
      case 'txtTitleNormalCommon':
        return {
          color: '#524B6B',
          fontSize: wp(3),
          textAlign: 'center'
        };
        case 'txtCommonEtiquetas':
          return {
            color: '#0D0140',
            fontSize: wp(3.7),
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginLeft: wp(6)
          };
          case 'txtForgotPassword':
            return {
              color: '#0D0140',
              fontSize: wp(3),
              alignSelf: 'flex-end',
              marginRight: wp(6),
              textDecorationLine: 'underline',
            };
          case 'txtNormal':
            return{
              color: '#524B6B',
              fontSize: wp(3.7),
            }
            case 'txtNormalOrange':
              return{
                color: '#FF9228',
                fontSize: wp(3.7),
              textDecorationLine: 'underline',
              marginLeft: wp(2),
  
              }
    
    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};
