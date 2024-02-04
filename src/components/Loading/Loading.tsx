import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingComponent = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  )
}

export default LoadingComponent

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})