import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TextUi } from '../Text/TextUi';

Icon.loadFont();

interface Props{
    titleIcon?: string;
    nameIcon?:string;
    onPress?: () =>void;
}

export const ButtonUploadImage = ({titleIcon, onPress ,nameIcon=' Upload company logo'}:Props) => {
  return (
      <TouchableOpacity 
      style={styles.container}
        onPress={onPress}
      >
      <Icon name={'cloud-upload'} size={wp(7)} color="#3B4657" style={{marginLeft: wp(2)}} /> 
      <TextUi
                texto={nameIcon}
                style="txtCommonEtiquetas"
                addStyle={{marginLeft:0 }}
              />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: wp(6),
    marginTop: wp(5),
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3B4657',
    borderRadius: 10,
    paddingHorizontal: wp(12),
    justifyContent: 'space-between',
    borderStyle: 'dashed',
    alignItems: 'center'
  },
});
