import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextUi } from '../Text/TextUi';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {firebase as db} from '@react-native-firebase/database';
import { backgroundComunity } from '../../assets/styles/stylesGeneral';
import  Icon  from 'react-native-vector-icons/FontAwesome';

interface Props{
    aboutMe: string;
    companyName: string;
    description: string;
    email: string;
    endDate: string;
    idCompany: string;
    jobTitle: string;
    name: string;
    password: string;
    photoUrl:string;
    startDate: string;
    uid: string;
}

export default function CardPost (data: any) {
    const [user, setUser] = useState<Props>();
    
    
        useEffect(() => {
          //console.log('  -> ',data.data.idUser);
          db
            .database()
            .ref(`Usuarios/${data.data.idUser}`)
            .on('value', snapshot => {
                //console.log(snapshot.val());
                setUser(snapshot.val())
                
                
            });
        }, []);
        
        return (
          <View 
          style={styles.containerPosts}>
              <View style={{flex: 1, paddingHorizontal: wp(2), paddingVertical: wp(4)}}>
              <View style={styles.userPhoto}>
                    <Image
                        source={{uri: `${user?.photoUrl}`}}
                        resizeMode='contain'
                        style={{width: wp(15), height: wp(15),borderRadius: wp(15)/2}}
                    />
                    <TextUi 
                        style="txtNormalProfileHeader" 
                        texto={`${(user?.name)}`} 
                        addStyle={styles.txtName}
                         />
              </View>
              <View style={styles.informationPost}>
              <TextUi style="txtCommonEtiquetas" texto={data.data.postTitle} addStyle={{marginLeft: wp(3)}} />
              <TextUi 
              style="txtTitleNormalCommon" 
              texto={data.data.postDescription} 
              addStyle={{marginLeft: wp(3), textAlign: 'left', marginTop: wp(2)}} />
            
              </View>
              </View>
              <View style={styles.containerComunity}>
              <View style={styles.comunity}>
                <Icon name="heart-o" size={wp(5)} color="#FFF" />
                <Icon name="comment-o" size={wp(5)} color="#FFF" />
              </View>
              <View style={styles.comunity}>
                <Icon name="share" size={wp(5)} color="#FFF" />
              </View>
              </View>
          
           </View>
        );
}

const styles = StyleSheet.create({
    containerPosts: {
        flex: 1,
        //alignItems: 'center',
        marginHorizontal: wp(10),
        //paddingHorizontal: wp(3),
       // paddingVertical: wp(5),
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
      informationPost:{
            flex: 3,
            //width: wp(80),
      },
      userPhoto:{
         // width: wp(80),
         // height: wp(15),
          flexDirection: 'row',
          alignItems: 'center'
      },
      txtName: {
          color: 'black'
      },
      containerComunity:{
          flex: 1,
          backgroundColor: backgroundComunity,
          borderBottomLeftRadius: wp(2),
          borderBottomRightRadius: wp(2),
          padding: wp(2),
          //width: wp(80)

          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp(2)
      },
      comunity:{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
      }
})