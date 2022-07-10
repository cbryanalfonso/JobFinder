import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonUI} from '../../components/Buttons/Button';
import {ButtonProfile} from '../../components/Buttons/ButtonProfile';
import {TextUi} from '../../components/Text/TextUi';
import {RootStackParamListAuth} from '../../Hooks/navigations/exportNavigation';
import {useProfile} from '../../Hooks/Profile/useProfile';
import {ButtonBack} from '../../components/Buttons/ButtonBack';
import {ButtonEditProfile} from '../../components/Buttons/ButtonEditProfile';
import {ButtonInformation} from '../../components/Buttons/ButtonInformation';

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const HomeProfile = () => {
  const navigation = useNavigation<navigationHeader>();

  const {
    openCameraPhoto,
    imagen,
    name,
    showAboutMe,
    setShowAboutMe,
    aboutMe,
    showWorkExperience,
    setShowWorkExperience,
    position,
    showResume,
    setShowResume,
  } = useProfile();

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#130160'} />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: wp(5),
              marginBottom: wp(4),
            }}>
            <View style={{marginTop: Platform.OS === 'ios' ? wp(10) : wp(5)}}>
              <ButtonBack style="buttonBackProfile" />
            </View>
            <View style={styles.topConf}>
              <Icon name="share-outline" size={wp(8)} color="#FFF" />
              <Icon name="cog-outline" size={wp(8)} color="#FFF" />
            </View>
          </View>
          <View style={{marginHorizontal: wp(5)}}>
            <ButtonProfile edit={true} onPress={() => openCameraPhoto()} />
            <TextUi
              texto={name ? name : 'Nombre Usuario'}
              style={'txtNormalProfileHeader'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp(5),
              marginTop: wp(2),
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TextUi texto="120k " style={'txtNormalProfileHeaderBold'} />
              <TextUi texto="Followers" style={'txtNormalProfileHeader'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextUi texto="20k " style={'txtNormalProfileHeaderBold'} />
              <TextUi texto="Following" style={'txtNormalProfileHeader'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <ButtonUI
                style="buttonEditProfile"
                text={'Edit Profile'}
                iconRight={true}
              />
            </View>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{alignItems: 'center',justifyContent: 'center',  marginBottom: wp(20),  }}>
          {showAboutMe ? (
            <ButtonInformation
              iconName="account"
              txt="About me"
              txtInformation={aboutMe ? aboutMe : ' Algo '}
              onPress={() => {
                navigation.navigate('AboutMe');
              }}
            />
          ) : (
            <ButtonEditProfile
              iconName="account"
              txt="About me"
              onPress={() => {
                setShowAboutMe(true);
              }}
            />
          )}
          {showWorkExperience ? (
            <ButtonInformation
              iconName="briefcase"
              txt="Work experience"
              workExp={true}
              txtInformation={position.jobTitle}
              txtNameCompany={position.companyName}
              onPress={() => {
                navigation.navigate('WorkExperience');
              }}
            />
          ) : (
            <ButtonEditProfile
              iconName="briefcase"
              txt="Work experience"
              onPress={() => {
                setShowWorkExperience(true);
              }}
            />
          )}

          <ButtonEditProfile iconName="account" txt="Education" />
          <ButtonEditProfile iconName="account" txt="Skill" />
          <ButtonEditProfile iconName="account" txt="Language" />
          <ButtonEditProfile iconName="account" txt="Appreciation" />
          {showResume ? (
            <ButtonInformation
            iconName="briefcase"
            txt="Resume"
            workExp={true}
            txtInformation={position.jobTitle}
            txtNameCompany={position.companyName}
            onPress={() => {
              navigation.navigate('HomeResume');
            }}
          />
          ):(
            <ButtonEditProfile iconName="account" txt="Resume" 
            onPress={() => {
              setShowResume(true);
            }}/>
          )}
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
    //flex: 1,
    paddingBottom: wp(5),
    backgroundColor: '#130160',
    marginBottom: wp(5),
  },
  containerBody: {
    flex: 5,
    //height: wp(120),
    // alignItems: 'center',
    paddingTop: wp(5),
    // backgroundColor: 'red',
    //marginBottom: wp(10)
  },
  topConf: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? wp(10) : wp(5),
    width: wp(25),
    alignSelf: 'flex-end',
    marginRight: wp(2),
    justifyContent: 'space-around',
  },
});
