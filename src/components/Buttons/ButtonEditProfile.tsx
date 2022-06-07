import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  txt: string;
  iconName: string;
  onPress?: ()=>void;
}

export const ButtonEditProfile = ({txt,iconName,onPress}: Props) => {
  return (
    <>
      <TouchableOpacity style={styles.container}
      onPress={onPress}
      >
        <View style={{flexDirection: 'row', alignItems: 'center', }}>
        <Icon name={iconName} size={wp(8)} color={'#FF9228'} />
        <Text style={styles.txt} >{txt}</Text>
        </View>
        <View style={styles.containerButton}>
          <Icon name="plus" size={wp(5)} color={'#FF9228'} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    paddingVertical: wp(5),
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: wp(2)
  },
  containerButton: {
    width: wp(8),
    height: wp(8),
    backgroundColor: '#FAD0C7',
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
      fontWeight: 'bold',
      fontSize: wp(3.8),
      marginLeft: wp(4)
  }
});
