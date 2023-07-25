import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function CenterScreen() {
  return (
    <View style={styls.container}>
      <Text>CenterScreen</Text>
    </View>
  )
}
const styls=StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
    }
})