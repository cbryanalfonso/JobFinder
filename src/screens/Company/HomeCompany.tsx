import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {Fab} from '../../components/Buttons/Fab';
import {TextUi} from '../../components/Text/TextUi';
import InputSearch from '../../components/Input/InputSearch';
import { useCompany } from '../../Hooks/Company/useCompany';

export const HomeCompany = () => {

    const { companies, handleOnChangeText, value } = useCompany()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextUi
          style="editInformationTitle"
          texto="Add work experience"
          addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
        />
        <InputSearch 
        placeholder="Choose your company" 
        onChangeText={(val:any) => handleOnChangeText(val)}
        value={value}
        />
      </View>
      <View style={styles.subContainerBody}></View>
      <View style={styles.subContainerFooter}>
        <Fab
         onPress={()=>{
             console.log(companies," Las companies");
             
         }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGroundScreenStart,
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainerBody: {
    flex: 5,
  },
  subContainerFooter: {
    flex: 1,
  },
});
