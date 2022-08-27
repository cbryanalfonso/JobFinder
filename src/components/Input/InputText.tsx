import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

interface Props {
  placeholder?: string;
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
  addStyleContainer?: any;
}

export const InputText = ({
  placeholder,
  autocapitalize,
  onChangeText,
  onBlur,
  value,
  security,
  addStyle,
  passwordShow,
  addStyleContainer
}: Props) => {
  const [show, setShow] = useState(passwordShow);
  return (
    <View
      style={[
        styles.containerBtn,
        passwordShow ? {flexDirection: 'row'} : null,
        addStyleContainer ? addStyleContainer : null
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#AAA6B9'}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[passwordShow ? {width: wp(60)}: null,  addStyle ? addStyle : null]}
        secureTextEntry={show ? true : false}
        autoCapitalize={autocapitalize ? 'none' : 'words'}
      />
      {passwordShow ? (
        <Icon
          name={show ? 'eye' :'eye-slash' }
          size={wp(7)}
          onPress={() => setShow(!show)}
          style={{
            position: 'absolute',
            right: 0,
            top: wp(3),
            paddingHorizontal: wp(4),
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    width: wp(80),
    paddingVertical: wp(4),
    paddingHorizontal: wp(4),
    backgroundColor: '#FFF',
    borderRadius: wp(3),
    marginTop: wp(4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
