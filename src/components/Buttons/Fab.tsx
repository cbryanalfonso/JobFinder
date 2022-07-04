import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
interface Props {
  onPress?: () => void;
}
Icon.loadFont();
export const Fab = ({onPress}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[styles.fabLocation]}>
        <View style={styles.fab}>
          <Icon
            name="plus"
            size={wp(10)}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={[styles.fabLocation]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Icon
              name="plus"
              size={wp(10)}
              color={'black'}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
  fab: {
    backgroundColor: '#FCA34D',
    borderRadius: 100,
    width: wp(15),
    height: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
