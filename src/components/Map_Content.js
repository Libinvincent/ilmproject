import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Images, Colors, Fonts } from '../constants';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import React from 'react';

export default function Map_Content() {
  return (
    <ImageBackground source={Images.google_map} style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          source={Images.mosques}
          style={{ width: responsiveWidth(13), height: responsiveHeight(4) }}
        />

        <Text style={styles.headertext}>Nearest Mosque</Text>
        
      </View>
      <View style={styles.mosqueContainer}>
        <Image source={Images.nearest_mosque} />
        <View style={{ marginHorizontal: responsiveWidth(4) }}>
          <Text style={styles.mosquenameText}>Muhydheen Juma Masjid</Text>
          <Text style={styles.distanceText}>Distance 0.4 km</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.directionButton}>
        <Text style={styles.buttonText}>Get directions</Text>
        <Image
          source={Images.arrow_icon}
          style={{
            width: responsiveWidth(4),
            marginHorizontal: responsiveWidth(2),
          }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(28),
    padding: responsiveWidth(4),
    width: responsiveWidth(100),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    color: Colors.DEFAUlT_GRAY,
    marginHorizontal: responsiveWidth(1.5),
  },
  mosqueContainer: {
    flexDirection: 'row',
    marginVertical: responsiveWidth(5),
    alignItems: 'center',
  },
  mosquenameText: {
    fontSize: responsiveFontSize(2.5),
    color: Colors.DEFAUlT_TEXT_BLACK,
    fontFamily: Fonts.Nunito_Medium,
    lineHeight: 1.4 * responsiveFontSize(2.5),
  },
  directionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(45),
    height: responsiveHeight(5),
    backgroundColor: Colors.DEFAUlT_GOLD,
    borderRadius: responsiveWidth(2),
    marginVertical: responsiveWidth(4),
  },
  buttonText: {
    fontFamily: Fonts.Nunito_Medium,
    fontSize: responsiveFontSize(2),
    lineHeight: 1.4 * responsiveFontSize(2),
    color: '#8A7653',
  },
  distanceText: {
    fontSize: responsiveFontSize(2.2),
    color: Colors.DEFAUlT_GRAY,
    fontFamily: Fonts.Nunito_Regular,
    lineHeight: 1.4 * responsiveFontSize(2.2),
  },
});
