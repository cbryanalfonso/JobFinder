import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../Text/TextUi';
import {ButtonUI} from '../Buttons/Button';

export default function CardCompany(data: any) {
  let dataCompany = data.data;
  useEffect(() => {
    console.log(data.data);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: `${dataCompany?.logo}`}}
          resizeMode="contain"
          style={{width: wp(15), height: wp(15), borderRadius: wp(15) / 2}}
        />
        <TextUi
          style="txtNormalProfileHeader"
          texto={`${dataCompany?.companyName}`}
          addStyle={styles.txtName}
        />
        <TextUi style="txtGrayDescription" texto={`1M Followers`} />
      </View>
      <View style={{marginVertical: wp(2)}}>
        <ButtonUI text="Follow" style="buttonFollowCompany" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: wp(3),
    paddingHorizontal: wp(2),
    marginHorizontal: wp(2),
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: wp(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  txtName: {
    color: 'black',
  },
});
