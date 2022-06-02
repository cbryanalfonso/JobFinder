import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ButtonUI} from '../../components/Buttons/Button';
import {InputText} from '../../components/Input/InputText';
import {TextUi} from '../../components/Text/TextUi';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Hooks/navigations/exportNavigation';
import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import { useCommons } from '../../Hooks/useComons/useCommons';
type noAunth = NativeStackNavigationProp<RootStackParamList>;

export const RegisterScreen = () => {
  const navigation = useNavigation<noAunth>();

  const {
    singUp,
  } = useCommons()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TextUi
          style="txtTitleStart"
          texto="Create an Account"
          addStyle={{fontSize: wp(7)}}
        />
        <TextUi
          style="txtTitleNormalCommon"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          addStyle={{marginTop: wp(2)}}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={values => singUp(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextUi texto="Full Name" style="txtCommonEtiquetas" />
              <InputText 
              placeholder="Full Name" 
              onChangeText={handleChange('name')}
              value={values.name}
              />
              <TextUi
                texto="Email"
                style="txtCommonEtiquetas"
                addStyle={{marginTop: wp(5)}}
              />
              <InputText 
              placeholder="Email" 
              autocapitalize={true}
              onChangeText={handleChange('email')}
              value={values.email}
               />
              <TextUi
                texto="Password"
                style="txtCommonEtiquetas"
                addStyle={{marginTop: wp(5)}}
              />
              <InputText
                placeholder="Password"
                passwordShow={true}
                autocapitalize={true}
                onChangeText={handleChange('password')}
                value={values.password}
              />

              <ButtonUI
                style={'buttonCommonLR'}
                text="Sign Up"
                onPress={handleSubmit}
              />
              <ButtonUI
                style={'buttonCommonGoogle'}
                text="SIGN UP WITH GOOGLE"
                addStyle={{marginTop: wp(0)}}
                image={true}
              />
            </View>
          )}
        </Formik>
        <View style={{flexDirection: 'row'}}>
          <TextUi style="txtNormal" texto="You have an account? " />
          <TextUi
            style="txtNormalOrange"
            texto="Sign In "
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 3,
    alignItems: 'center',
  },
  containerFormik: {
    flex: 1,
  },
});
