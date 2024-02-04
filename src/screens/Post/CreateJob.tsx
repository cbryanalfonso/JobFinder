import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { TextUi } from '../../components/Text/TextUi'
import { InputText } from '../../components/Input/InputText'
import { TextAreaInput } from '../../components/Input/TextAreaInput'
import { ButtonUI } from '../../components/Buttons/Button'
import { backGroundScreenStart } from '../../assets/styles/stylesGeneral'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ButtonAdd from '../../components/Buttons/ButtonAdd';

const CreateJob = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Formik
       initialValues={{
         jobPosition: '',
         typeWork: '',
         jobLocation: '',
         company: '',
         typeEmploye: '',
         description: '',
       }} 
       onSubmit={values => console.log(values)}>
       {({handleChange, handleBlur, handleSubmit, values}) => (
         <>
           <View style={{flex: 4,}}>
           <TextUi
             style="editInformationTitle"
             texto="Add a Job"
             addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
           />
           <View style={styles.containerBody}>
            <ButtonAdd 
            text='Job Position' 
            value={'Job Position'}
            iconName='plus' />
             
             <TextUi
               texto="Post Description"
               style="txtCommonEtiquetas"
               addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
             />

             <View style={styles.txtArea}>
               {/* <TextAreaInput
               placeholder='What do you want to talk about?'
                 onChangeText={handleChange('postDescription')}
                 value={values.postDescription}
               /> */}
             </View>
            
           </View>
           </View>
           <View style={styles.footer}>
             <ButtonUI
               style="buttonCommonLR"
               text="Post"
               onPress={handleSubmit}
             />
           </View>
         </>
       )}
     </Formik>
   </SafeAreaView>
  )
}

export default CreateJob

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backGroundScreenStart,
      },
      txtArea: {
        width: wp(85),
        paddingVertical: wp(5),
        backgroundColor: '#FFF',
        borderRadius: wp(5),
        minHeight: wp(40),
        marginTop: wp(5),
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
      },
      containerBody: {
        flex: 6,
        alignItems: 'center',
        marginTop: wp(5),
      },
      footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
      },
      
})