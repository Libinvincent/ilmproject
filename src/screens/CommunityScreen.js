
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const GlassmorphismComponent = () => {
  return (
    <View style={styles.container}>
      {/* Background Image or Content */}
      <View style={styles.backgroundContent}>
        {/* Your content goes here */}
        <Text style={styles.text}>Hello, Glassmorphism!</Text>
      </View>

      {/* Glassmorphism Effect */}
      <BlurView
        style={styles.glassmorphism}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />

      {/* Additional Content */}
      {/* Add any additional content you want to show on top of the glassmorphism effect */}
      <View style={styles.additionalContent}>
        {/* Your additional content goes here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green'
  },
  backgroundContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green', // Semi-transparent white background
  },
  glassmorphism: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width:400,
    height:400
  },
  additionalContent: {
    // Add any styles for additional content here
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default GlassmorphismComponent;











// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'

// export default function CommunityScreen() {
//   return (
//     <View style={{backgroundColor:'green'}}>
//       <Text>CenterScreen</Text>
//     </View>
//   )
// }
// const styls=StyleSheet.create({
//     container:{
//         backgroundColor:'green',
        
//     }
// })