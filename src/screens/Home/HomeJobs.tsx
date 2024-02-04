import { firebase } from '@react-native-firebase/auth'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { useCompany } from '../../Hooks/Company/useCompany';

export const HomeJobs = () => {
  const {companies, companiesDB} = useCompany()
  useEffect(() => {
   console.log(companies);
   console.log(companiesDB);
   
  }, [])
  
  return (
   <SafeAreaView style={{ flex: 1,}}>
     
   </SafeAreaView>
  )
}
