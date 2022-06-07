import React from 'react';
import {TextInput} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  placeholder: string;
  nameRightIcon?: string;
  nameLeftIcon?: boolean;
  autocapitalize?: boolean;
  onChangeText?: any;
  onBlur?: any;
  value?: any;
  style?: string;
  security?: boolean;
  addStyle?: any;
  passwordShow?: boolean;
}

export const TextAreaInput = ({
  placeholder,
  autocapitalize,
  onChangeText,
  onBlur,
  value,
  security,
  addStyle,
  passwordShow,
}: Props) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#AAA6B9'}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[
            {marginHorizontal: wp(5), minHeight:wp(40)},
          passwordShow ? {width: wp(60)} : null,
          addStyle ? addStyle : null,
        ]}
        autoCapitalize={autocapitalize ? 'none' : 'sentences'}
        multiline={true}
        numberOfLines={10}
      />
    </>
  );
};
