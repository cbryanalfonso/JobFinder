import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {Fab} from '../../components/Buttons/Fab';
import {TextUi} from '../../components/Text/TextUi';
import InputSearch from '../../components/Input/InputSearch';
import {useCompany} from '../../Hooks/Company/useCompany';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListAuth} from '../../Hooks/navigations/exportNavigation';
import {useNavigation} from '@react-navigation/core';
import {useEffect} from 'react';

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

interface Props {
  emotions: [];
}

export const HomeCompany = () => {
  //RegisterCompany
  const navigation = useNavigation<navigationHeader>();
  const keyExtractor = (item: any, index: any) => index.toString();

  const {companies, handleOnChangeText, value, companyResult, companiesDB} =
    useCompany();
  useEffect(() => {
    console.log('resultados de la compañia ->', companiesDB);
  }, [companiesDB]);

  //const renderItem =

  const Item = (title: any, logo: any) => {
    
    return (
      <View style={styles.containerCompanies}>
        <Image
            source={{uri: title.logo}}
            style={{width: wp(10), height: wp(10)}}
            resizeMode='contain'
        />
        <TextUi style="txtCommonEtiquetas" texto={title.title} addStyle={{marginLeft: wp(3)}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextUi
          style="editInformationTitle"
          texto="Search your company "
          addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
        />
        <InputSearch
          placeholder="Choose your company"
          onChangeText={(val: string) => handleOnChangeText(val)}
          value={value}
        />
      </View>
      <View style={styles.subContainerBody}>
        <FlatList
          data={companiesDB}
          renderItem={({item}) => <Item title={item.companyName} logo={item.logo} />}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={styles.subContainerFooter}>
        <Fab
          onPress={() => {
            navigation.navigate('RegisterCompany');
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
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainerBody: {
    flex: 5,
  },
  subContainerFooter: {
    flex: 1,
  },
  containerCompanies: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(10),
    paddingHorizontal: wp(10),
    paddingVertical: wp(5),
    backgroundColor: 'white',
    marginVertical: wp(2),
    borderRadius: wp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
