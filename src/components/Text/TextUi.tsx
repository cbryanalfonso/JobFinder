import React from 'react';
import {Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  texto: string;
  style: string;
  addStyle?: any;
}

export const TextUi = ({texto, style, addStyle}: Props) => {
  return (
    <>
      <Text style={[getTextStyle(style) as any, addStyle ? addStyle : null]}>
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
    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};
