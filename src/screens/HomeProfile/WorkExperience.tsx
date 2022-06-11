import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';
import {TextAreaInput} from '../../components/Input/TextAreaInput';
import {ButtonUI} from '../../components/Buttons/Button';
import {useProfile} from '../../Hooks/Profile/useProfile';
import {Formik} from 'formik';
import {backGroundScreenStart} from '../../assets/styles/stylesGeneral';
import {InputText} from '../../components/Input/InputText';

export const WorkExperience = () => {
  const {workExperienceMySelf} = useProfile();
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{
            jobTitle: '',
            companyName: '',
            startDate: '',
            endDate: '',
            description: '',
          }}
          onSubmit={values => workExperienceMySelf(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <TextUi
                style="editInformationTitle"
                texto="Add work experience"
                addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
              />
              <View style={styles.containerBody}>
                <TextUi
                  texto="Job Title"
                  style="txtCommonEtiquetas"
                  addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
                />
                <InputText
                  autocapitalize={true}
                  onChangeText={handleChange('jobTitle')}
                  value={values.jobTitle}
                />
                <TextUi
                  texto="Company Name"
                  style="txtCommonEtiquetas"
                  addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
                />
                <InputText
                  autocapitalize={true}
                  onChangeText={handleChange('companyName')}
                  value={values.companyName}
                />
                <View  style={{flexDirection: 'row', justifyContent: 'space-between', width: wp(80)}}>
                  <View>
                    <TextUi
                      texto="Start Date"
                      style="txtCommonEtiquetas"
                      addStyle={{alignSelf: 'flex-start', marginLeft: wp(0)}}
                    />
                    <InputText
                      autocapitalize={true}
                      onChangeText={handleChange('startDate')}
                      value={values.startDate}
                      addStyle={{width: wp(35)}}
                      addStyleContainer={{width: wp(35)}}
                    />
                  </View>
                  <View>
                    <TextUi
                      texto="End Date"
                      style="txtCommonEtiquetas"
                      addStyle={{alignSelf: 'flex-start', marginLeft: wp(0)}}
                    />
                    <InputText
                      autocapitalize={true}
                      onChangeText={handleChange('endDate')}
                      value={values.endDate}
                      addStyle={{width: wp(35)}}
                      addStyleContainer={{width: wp(35)}}
                    />
                  </View>
                </View>
                <TextUi
                      texto="Description"
                      style="txtCommonEtiquetas"
                      addStyle={{alignSelf: 'flex-start', marginLeft: wp(4)}}
                    />
                <View style={styles.txtArea}>
                  <TextAreaInput
                    onChangeText={handleChange('description')}
                    value={values.description}
                  />
                </View>
              </View>
              <View style={styles.footer}>
                <ButtonUI
                  style="buttonCommonLR"
                  text="SAVE"
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
};

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
    backgroundColor: 'red',
  },
});
