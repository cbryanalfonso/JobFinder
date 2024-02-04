import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import CardPost from '../../components/Cards/CardPost';

interface Props {
    route?: ReactNode
    // any props that come into the component
}

const HomePostings = ({route} : { route: any}) => {
  let data = route?.params?.data;

  /* useEffect(() => {
   console.log(route.params.data);
   
  }, []) */
  
  

  const keyExtractor = (item: any, index: any) => index.toString();
  return (
    <View style={{flex: 7}}>
      <FlatList
        data={data}
        renderItem={({item}) => <CardPost data={item} />}
        keyExtractor={keyExtractor}
      /> 
    </View>
  );
};

export default HomePostings;

const styles = StyleSheet.create({});
