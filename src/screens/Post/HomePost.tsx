import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {firebase as db} from '@react-native-firebase/database';
import LoadingComponent from '../../components/Loading/Loading';
import {ButtonUI} from '../../components/Buttons/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListAuth} from '../../Hooks/navigations/exportNavigation';
import {useNavigation} from '@react-navigation/core';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useCompany} from '../../Hooks/Company/useCompany';
import CardCompany from '../../components/Cards/CardCompany';

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const HomePost = () => {
  const navigation = useNavigation<navigationHeader>();
  const postUsers = [] as any;
  const [postUser, setPostUser] = useState();
  const [companiesFinish, setCompaniesFinish] = useState([]);
  const [loading, setLoading] = useState(false);
  const keyExtractor = (item: any, index: any) => index.toString();
  const [data, setData] = useState([]);

  const {companies, companiesDB} = useCompany();

  useLayoutEffect(() => {
    db.database()
      .ref(`Post`)
      .orderByChild('datePost')
      .on('child_added', snapshot => {
        snapshot.forEach(element => postUsers.push(element.val()));
      });
    setPostUser(postUsers);
    setCompaniesFinish(companies);
  }, [loading]);

  useEffect(() => {
    startLoading();
    console.log(companies, '1');
    console.log(companiesDB, '2');
    setCompaniesFinish(companies);
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      getPost();
    }, 1000);
  };

  const getPost = () => {
    db.database()
      .ref(`Post`)
      .orderByChild('datePost')
      .on('child_added', snapshot => {
        //*postUsers.push(snapshot.val());
        //snapshot.forEach(element => postUsers.push(element.val()));
      });
    setPostUser(postUsers);
    setCompaniesFinish(companies);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <View>
          <View style={{flex: 7, width: wp(90)}}>
            <FlatList
              numColumns={2}
              contentContainerStyle={{ flex: 1,justifyContent: 'space-around'}}
              data={companiesFinish}
              keyExtractor={keyExtractor}
              renderItem={({item}) => <CardCompany data={item} />}
            />
          </View>
          <View style={styles.footerButtons}>
            <ButtonUI
              style="buttonCommonGoogle"
              text="Posting"
              onPress={() =>
                navigation.navigate('HomePostings', {
                  data: postUser,
                })
              }
              addStyle={styles.buttonHome}
            />
            <ButtonUI
              style="buttonCommonLR"
              text="My connections"
              onPress={() => navigation.navigate('CreateJob')}
              addStyle={styles.buttonHome}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGroundScreenStart,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtons: {
    flex: 2,
    flexDirection: 'row',
    paddingBottom: wp(3),
    justifyContent: 'space-around',
  },
  buttonHome: {
    width: wp(35),
    height: wp(14),
  },
});
