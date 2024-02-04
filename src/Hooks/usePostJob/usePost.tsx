import React, { useEffect, useLayoutEffect, useState } from 'react'
import {firebase as db} from '@react-native-firebase/database';
import {firebase as auth} from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../navigations/exportNavigation';


type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

interface Props{
    postTitle: string;
    postDescription: string;
}

const usePost = () => {
 
    const navigation = useNavigation<navigationHeader>();
    const usuarioActual: string = auth.auth().currentUser?.uid!;
    const postUsers = [] as any; 
    const [postUser, setPostUser] = useState();

    useLayoutEffect(() => {
        //console.log('Consumiendo getPost');
        
        getPost();
        return getPost()
    }, [usuarioActual])
    

    const generateRandom = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result1 = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
          result1 += characters.charAt(
            Math.floor(Math.random() * charactersLength),
          );
        }
        return result1;
      };

    const createPostUser = ({
        postDescription,
        postTitle
      }: Props) => {
          const idRandom = generateRandom()
       if((postDescription || postTitle )){
        
        db
        .database()
          .ref(`/Post/${usuarioActual}/${idRandom}`)
          .set({
            idPost: idRandom,
            idUser: usuarioActual,
            postTitle,
            postDescription,
            datePost: new Date(),
          })
          .then(() => {
            console.log('Post publicado correctamente');
            Alert.alert('Post publicado correctamente.');
            navigation.navigate('HomePost');
          })
          .catch(err => {
            console.log(err);
          });
      
       }else{
         Alert.alert('Faltan valores perro ... ', idRandom)
       }
      };

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

      return{
          createPostUser,
          postUser,
          postUsers,
          getPost,
      }

}

export default usePost;
