import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {  backGroundScreenStart } from '../../assets/styles/stylesGeneral';
import { TextUi } from '../../components/Text/TextUi';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ButtonNext } from '../../components/Buttons/ButtonNext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Hooks/navigations/exportNavigation';
import { useNavigation } from '@react-navigation/core';

type noAunth = NativeStackNavigationProp<RootStackParamList>;

export const StartScreen = () => {
  const navigation = useNavigation<noAunth>();

  return (
   <SafeAreaView style={styles.container}>
       <View style={styles.subContainerImage}>
          <Image
            source={require('../../assets/images/startImage.png')}
            resizeMode={'contain'}
          />
       </View>
       <View style={styles.subContainerText}>
          <TextUi texto='Find your' style='txtTitleStart' />
          <TextUi texto='Dream Job' style='txtTitleStartNaranja' />
          <TextUi texto='Here!' style='txtTitleStart' />
       </View>
       <View style={styles.containerNext}>
       <ButtonNext
          onPress={()=>{navigation.navigate('LoginScreen')}}
       />
       </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: backGroundScreenStart
    },
    subContainerImage:{
      flex: 4,
      justifyContent:'flex-end',
      alignItems: 'center',
      paddingBottom: '20%',
    },
    subContainerText:{
      flex: 1,
      paddingHorizontal: wp(10)
    },
    containerNext:{flex: 1, 
      justifyContent: 'center', 
      alignItems: 'flex-end',
      paddingHorizontal: wp(10),
    }

});
