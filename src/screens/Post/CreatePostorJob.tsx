import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {ButtonUI} from '../../components/Buttons/Button';
import {TextUi} from '../../components/Text/TextUi';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../../Hooks/navigations/exportNavigation';
import { useNavigation } from '@react-navigation/core';


type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const CreatePostorJob = () => {

  const navigation = useNavigation<navigationHeader>();
  return (
    <SafeAreaView style={styles.container}>
      <TextUi
        style="editInformationTitle"
        texto="Would you like to add a"
        addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
      />
      <ButtonUI
        style="buttonCommonLR"
        text="Post"
        onPress={()=>navigation.navigate('CreatePost')}
      />
      <ButtonUI
        style="buttonCommonGoogle"
        text="Make a Job"
        onPress={()=>navigation.navigate('CreateJob')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backGroundScreenStart,
    flex: 1,
    alignItems: 'center'
  },
});
