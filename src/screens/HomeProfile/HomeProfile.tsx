import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonUI } from '../../components/Buttons/Button';
import {ButtonProfile} from '../../components/Buttons/ButtonProfile';
import {TextUi} from '../../components/Text/TextUi';
import {RootStackParamListAuth} from '../../Hooks/navigations/exportNavigation';
import { useProfile } from '../../Hooks/Profile/useProfile';
import { ButtonBack } from '../../components/Buttons/ButtonBack';
import { ButtonEditProfile } from '../../components/Buttons/ButtonEditProfile';

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const HomeProfile = () => {
  const navigation = useNavigation<navigationHeader>();

  const {
    openCameraPhoto,
    imagen,
    name,
  } = useProfile();

  return (
    <>
      <StatusBar hidden barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(5), marginBottom: wp(4)}}>
          <View style={{marginTop: Platform.OS === 'ios' ? wp(10) : wp(5)}} >
            <ButtonBack   />
          </View>
          <View style={styles.topConf}>
            <Icon name="share-outline" size={wp(8)} color="#FFF" />
            <Icon name="cog-outline" size={wp(8)} color="#FFF" />
          </View>
          </View>
          <View style={{marginHorizontal: wp(5)}}>
           <ButtonProfile edit={true} onPress={()=>openCameraPhoto()}  />
            <TextUi texto={name ? name : 'Nombre Usuario'} style={'txtNormalProfileHeader'} />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: wp(5), marginTop: wp(2), justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}> 
              <TextUi texto="120k " style={'txtNormalProfileHeaderBold'} />
              <TextUi texto="Followers" style={'txtNormalProfileHeader'} />
            </View>
            <View style={{flexDirection: 'row'}}> 
            <TextUi texto="20k " style={'txtNormalProfileHeaderBold'} />
              <TextUi texto="Following" style={'txtNormalProfileHeader'} />
            </View>
            <View style={{flexDirection: 'row', }}> 
              <ButtonUI style='buttonEditProfile' text={'Edit Profile'} iconRight={true}/>
            </View>
          </View>
        </View>
        <ScrollView 
        contentContainerStyle={styles.containerBody}
        >
          <ButtonEditProfile/>
          <ButtonEditProfile/>
          <ButtonEditProfile/>
          <ButtonEditProfile/>

        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 0.5,
    backgroundColor: '#130160',
  },
  containerBody: {
    flex: 5,
    alignItems: 'center',
   paddingTop: wp(5)

  },
  topConf: {
    flexDirection: 'row',
    marginTop:  Platform.OS === 'ios' ? wp(10) : wp(5),
    width: wp(25),
    alignSelf: 'flex-end',
    marginRight: wp(2),
    justifyContent: 'space-around',
  },
});
