import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import {Colors, Images} from '../constants';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={Colors.DEFAUlT_WHITE}
      />
      <Image source={Images.ilmlogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PURE_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
