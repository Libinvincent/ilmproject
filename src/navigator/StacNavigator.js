import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TapNavigator from './TapNavigator'

const Stack= createNativeStackNavigator()

export default function StacNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Tab' component={TapNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}