import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonBack} from '../../components/Buttons/ButtonBack';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';
import {TextAreaInput} from '../../components/Input/TextAreaInput';
import { ButtonUI } from '../../components/Buttons/Button';

const AboutMe = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <ButtonBack style="buttonBackAboutMe" colorIcon="#3B4657" />
        <View style={styles.containerBody}>
          <TextUi
            style="editInformationTitle"
            texto="About Me"
            addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
          />
          <View style={styles.txtArea}>
            <TextAreaInput placeholder="Tell me about you." />
          </View>
        </View>
        <View style={styles.footer} >
            <ButtonUI style='buttonCommonLR' text='SAVE'/>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: wp(3),
  },
  txtArea: {
    width: wp(85),
    paddingVertical: wp(5),
    backgroundColor: '#FFF',
    borderRadius: wp(5),
    minHeight: wp(60),
    marginTop: wp(5),
  },
  containerBody: {
    flex: 4,
    alignItems: 'center',
    marginTop: wp(10),
  },
  footer:{
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default AboutMe;
