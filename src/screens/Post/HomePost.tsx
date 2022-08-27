import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View,  } from 'react-native'
import { backGroundScreenStart } from '../../assets/styles/stylesGeneral';
import usePost from '../../Hooks/usePostJob/usePost';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardPost from '../../components/Cards/CardPost';
import {firebase as db} from '@react-native-firebase/database';
import {firebase as auth} from '@react-native-firebase/auth';

export const HomePost = () => {
  const postUsers = [] as any; 
  const [postUser, setPostUser] = useState();
  const keyExtractor = (item: any, index: any) => index.toString();

  useLayoutEffect(() => {
    
    db
    .database()
    .ref(`Post`)
    .orderByChild('idPost')
    .on('child_added', snapshot => {
        snapshot.forEach(element =>(
          postUsers.push(element.val())
          ))
      });
    
        setPostUser(postUsers)
        console.log(postUsers);
        
        //console.log(values, '<- sons los values');
        
  }, [])

  
  const getPost = () =>{
    db
    .database()
    .ref(`Post`)
    .orderByChild('idPost')
    .on('child_added', snapshot => {
        //*postUsers.push(snapshot.val());
        snapshot.forEach(element =>(
            postUsers.push(element.val())
            
            )
            )
            
      });
        setPostUser(postUsers)
  }

  return (
   <SafeAreaView style={styles.container} >
      <View style={{flex: 1}}>
      <FlatList
          data={postUser}
          renderItem={({item}) => <CardPost data={item}/>}
          keyExtractor={keyExtractor}
        />
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: backGroundScreenStart,
    },
   
});
