import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
Icon.loadFont();

interface Props {
  placeholder: string;
  value?: any;
  onChangeText?: any;
  addStyle?: any;
}

export default function InputSearch({
  placeholder,
  value,
  onChangeText,
  addStyle,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#0D0140'
        onChangeText={onChangeText}
        style={[{width: wp(67), marginRight: wp(2)},addStyle ? addStyle : null]}
      />
      <Icon
        name='magnify'
        size={wp(6)}
        color={'black'}
        style={{marginRight: wp(3)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: wp(80),
    paddingVertical: wp(4),
    paddingHorizontal: wp(3),
    borderRadius: wp(3),
    marginTop: wp(3),
    flexDirection: 'row'
  },
});
