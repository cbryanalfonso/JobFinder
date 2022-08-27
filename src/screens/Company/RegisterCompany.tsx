import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {TextUi} from '../../components/Text/TextUi';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import {InputText} from '../../components/Input/InputText';
import {ButtonUI} from '../../components/Buttons/Button';
import {ButtonUploadImage} from '../../components/Buttons/ButtonUploadImage';
import {useCompany} from '../../Hooks/Company/useCompany';
import { RootStackParamListAuth } from '../../Hooks/navigations/exportNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';


type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;

export const RegisterCompany = () => {
  const {openCameraPhoto, registerNewCompany, image} = useCompany();
  const navigation = useNavigation<navigationHeader>();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TextUi
            style="editInformationTitle"
            texto="Register Company"
            addStyle={{marginLeft: wp(4), fontSize: wp(5)}}
          />
        </View>
        <View style={styles.subContainer}>
          <Formik
            initialValues={{
              nameCompany: '',
              description: '',
              logo: '',
              socialMedia: '',
              webPage: '',
            }}
            onSubmit={values => registerNewCompany(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextUi texto="Name Company" style="txtCommonEtiquetas" />
                <InputText
                  placeholder="Name company"
                  onChangeText={handleChange('nameCompany')}
                  value={values.nameCompany}
                />
                <TextUi
                  texto="Description"
                  style="txtCommonEtiquetas"
                  addStyle={{marginTop: wp(5)}}
                />
                <InputText
                  placeholder="Description"
                  autocapitalize={true}
                  onChangeText={handleChange('description')}
                  value={values.description}
                />

                <TextUi
                  texto="Social media"
                  style="txtCommonEtiquetas"
                  addStyle={{marginTop: wp(5)}}
                />
                <InputText
                  placeholder="Social Media"
                  autocapitalize={true}
                  onChangeText={handleChange('socialMedia')}
                  value={values.socialMedia}
                />
                <TextUi
                  texto="Web page"
                  style="txtCommonEtiquetas"
                  addStyle={{marginTop: wp(5)}}
                />
                <InputText
                  placeholder="Web page"
                  autocapitalize={true}
                  onChangeText={handleChange('webPage')}
                  value={values.webPage}
                />
               {image ? (
                 <>
                  <TextUi
                  texto="Logo subido con exito"
                  style="txtCommonEtiquetas"
                  addStyle={{marginTop: wp(5)}}
                />
                 </>
               ):  <ButtonUploadImage onPress={() => openCameraPhoto()} />}
                {/*   */}
                <ButtonUI
                  style={'buttonCommonLR'}
                  text="Register Company"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGroundScreenStart,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 9,
    paddingHorizontal: wp(4),
    alignItems: 'center',
  },
});
