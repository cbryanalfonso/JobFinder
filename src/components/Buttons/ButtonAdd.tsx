import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextUi } from '../Text/TextUi'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { InputText } from '../Input/InputText';

interface Props{
    text: string,
    iconName: string;
    addStyleTxt?: any;
    addStyle?: any;
    onPress?: ()=> void;
    onChangeText?: any;
    onBlur?: any;
    value?: any;
}

const ButtonAdd = ({text,addStyle,addStyleTxt, onPress, iconName, onChangeText,onBlur,value}:Props) => {
  return (
    <View
        style={[styles.selectPosition ,addStyle ? addStyle: null]}
        
     >
       {/*  <TextUi
            texto={text}
            style="txtCommonEtiquetas"
            addStyle={[styles.txtInformationJob, addStyleTxt ? addStyleTxt : null]}
        />  */}
        {/* <InputText
            
            placeholder='Write the title of your post here'
            autocapitalize={true}
            onChangeText={onChangeText}
            value={value}
          /> */}
          <TextInput
        
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
       
      />
        <TouchableOpacity 
        style={styles.containerButton}
        onPress={onPress} 
        >
            <Icon name={iconName} size={wp(4)} color={'#FF9228'} />
        </TouchableOpacity>
    </View>

  )
}

export default ButtonAdd;

const styles = StyleSheet.create({
    selectPosition: {
        backgroundColor: '#FFF',
        width: wp(80),
        paddingVertical: wp(3),
        paddingHorizontal: wp(4),
        borderRadius: wp(3),
        marginTop: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      txtInformationJob:{
        alignSelf: 'flex-start',
        marginLeft: wp(0),
        fontWeight: '700',
        color: '#0D0140',
       // font
      },
      containerButton:{
          width: wp(7),
          height: wp(7),
          backgroundColor: '#FFD6AD',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp(7)/2,
          
      }
})