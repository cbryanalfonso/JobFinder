import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';
import {InputText} from '../../components/Input/InputText';
import {ButtonUI} from '../../components/Buttons/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Hooks/navigations/exportNavigation';
import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';

type noAunth = NativeStackNavigationProp<RootStackParamList>;

export const LoginScreen = () => {
  const navigation = useNavigation<noAunth>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TextUi
          style="txtTitleStart"
          texto="Welcome Back"
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
            email: '',
            password: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextUi texto="Email" style="txtCommonEtiquetas" />
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
              <TextUi
                texto="Forgot password?"
                style="txtForgotPassword"
                addStyle={{marginTop: wp(5)}}
                onPress={() => {
                  console.log('sad');
                }}
              />
              <ButtonUI style={'buttonCommonLR'} text="Login" onPress={handleSubmit}/>
              <ButtonUI
                style={'buttonCommonGoogle'}
                text="SIGN IN WITH GOOGLE"
                addStyle={{marginTop: wp(0)}}
                image={true}
              />
            </View>
          )}
        </Formik>
        <View style={{flexDirection: 'row'}}>
          <TextUi style="txtNormal" texto="You don't have an account yet? " />
          <TextUi
            style="txtNormalOrange"
            texto="Sign Up "
            onPress={() => {
              navigation.navigate('RegisterScreen');
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
