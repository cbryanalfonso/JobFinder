import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

interface Props{
  onPress: ()=> void;
}

export const ButtonNext = ({onPress}: Props) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.container}
    >
     <Icon 
      name='arrow-right'
      size={wp(7)}
      color={'#FFF'}
      style={{alignSelf: 'center'}}
     ></Icon>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#130160',
        width: wp(16),
        height: wp(16),
        borderRadius: wp(8),
        justifyContent: 'center',
    }
});