import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {TextUi} from '../../components/Text/TextUi';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ButtonUploadImage} from '../../components/Buttons/ButtonUploadImage';
import {useResume} from '../../Hooks/Profile/useResume';
import {ButtonUI} from '../../components/Buttons/Button';

const HomeResume = () => {
  const {openCameraPhoto, imagen} = useResume();
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TextUi
            style="editInformationTitle"
            texto="Add Resume"
            addStyle={{marginLeft: wp(4), fontSize: wp(5)}}
          />
        </View>
        <View style={styles.body}>
          <ButtonUploadImage onPress={() => openCameraPhoto()} />
        </View>
        <View style={styles.footer}>
        <ButtonUI
            style="buttonCommonLR"
            text="SAVE"
            onPress={()=>{console.log('value');
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGroundScreenStart,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 9,
    alignItems: 'center',
  },
  footer:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default HomeResume;
