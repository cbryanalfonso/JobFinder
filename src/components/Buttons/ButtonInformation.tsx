import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress?: () => void;
  iconName: string;
  txt: string;
  txtInformation: string;
}

export const ButtonInformation = ({iconName, txt, onPress, txtInformation}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={iconName} size={wp(8)} color={'#FF9228'} />
          <Text style={styles.txt}>{txt}</Text>
        </View>
        <TouchableOpacity style={styles.containerButton}
          onPress={onPress}
        >
          <Icon name="pencil-outline" size={wp(5)} color={'#FF9228'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          width: wp(80),
          paddingVertical: wp(1),
          paddingHorizontal: wp(5),
          borderBottomLeftRadius: wp(5),
          borderBottomRightRadius: wp(5),
          marginBottom: wp(2),
          justifyContent: 'flex-start'
        }}>
        <View style={styles.line} />
        <Text style={styles.txtInformation}>
            {txtInformation}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    paddingVertical: wp(5),
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: wp(2),
  },
  containerButton: {
    width: wp(8),
    height: wp(8),
    backgroundColor: '#FAD0C7',
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: wp(3.8),
    marginLeft: wp(4),
  },
  line: {
    width: wp(70),
    borderBottomWidth: 1,
    borderColor: '#DEE1E7',
    alignSelf: 'center',
  },
  txtInformation:{
      color: '#524B6B',
      fontSize: wp(3),
      marginTop: wp(2),
      marginBottom: wp(3)
  }
});
