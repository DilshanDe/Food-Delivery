import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparing() {
  const navigation=useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Delivery')

    },3000)
  },[])
  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image source={require('../assets/images/bikeguy.gif')}
      className='h-80 w-80'/>
    </View>
  )
}